// react
import { useMemo } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// next
import NextApp from "next/app";
// important
//
import { ApolloClient } from "@apollo/client";
import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
//
import isEqual from "lodash/isEqual";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";

export const APOLLO_STATE_PROP_NAME = "__apollo_state__";
export const VARIABLE_PROP_NAME = "__variable__";
/**
 * @returns {ApolloClient}
 */
function createApolloClient(domain = "", locale) {
  const cms = process.env.CMS;
  const uri = cms + "/admin/api";
  const as =
    process.env.NODE_ENV === "production" ? domain : process.env.HOST_DEV;
  console.log("createApolloClient", uri, as);
  const httpLink = new HttpLink({
    uri,
    headers: {
      as, // HOST env for dev mode
      locale,
    },
  });
  const link =
    typeof window === "object"
      ? setContext(async (_, { headers }) => {
          const token = await AsyncStorage.getItem("token");
          return {
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : "",
            },
          };
        }).concat(httpLink)
      : httpLink;
  const cache = new InMemoryCache();
  return new ApolloClient({
    link,
    ssrMode: typeof window === "undefined",
    cache,
  });
}
export let apolloClients = {};
/**
 * @returns {ApolloClient}
 */
function existingApolloClient(name) {
  return apolloClients[name];
}

function mergeState(a, b) {
  return merge(a, b, {
    arrayMerge: (destinationArray, sourceArray) => [
      ...sourceArray,
      ...destinationArray.filter((d) =>
        sourceArray.every((s) => !isEqual(d, s)),
      ),
    ],
  });
}
/**
 *
 * @param {*} initialState
 * @returns {ApolloClient}
 */
export function initializeApollo(
  initialState = null,
  { domain = "_", locale = "vi" },
) {
  const _apolloClient =
    existingApolloClient(domain) || createApolloClient(domain, locale);
  if (initialState) {
    const existingCache = _apolloClient.cache.extract();
    const data = mergeState(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }
  if (!apolloClients[domain]) apolloClients[domain] = _apolloClient;
  return _apolloClient;
}
export function getContextVar(context) {
  const { locale, asPath } = context;
  return {
    domain: context.req ? context.req.headers.host : window.location.host,
    locale,
    asPath,
  };
}
export function getVariables(pageProps = {}) {
  return pageProps[VARIABLE_PROP_NAME] || {};
}
export function getApolloState(pageProps = {}) {
  return pageProps[APOLLO_STATE_PROP_NAME] || {};
}

export async function executeInitialProps(context, initialProps, queries = []) {
  if (typeof window === "undefined") {
    console.log(context.asPath);
    const { props } = await executeServerSide(context, queries);
    initialProps.pageProps = props;
  } else {
    const { domain, locale } = getContextVar(context);
    initialProps.pageProps[VARIABLE_PROP_NAME] = { domain, locale };
  }
  return initialProps;
}

export async function executeServerSide(context, queries = []) {
  // add
  const { domain, locale } = getContextVar(context);
  const client = initializeApollo(null, { domain, locale });
  for (var i in queries) {
    var QUERY = queries[i];
    if (!QUERY.disableLocale) {
      if (QUERY.variables) QUERY.variables.locale = locale;
      else QUERY.variables = { locale };
    }
    try {
      await client.query(QUERY);
    } catch (e) {
      console.log("cannot execute", QUERY, e);
    }
  }

  return {
    props: {
      [APOLLO_STATE_PROP_NAME]: client.cache.extract(),
      [VARIABLE_PROP_NAME]: { domain, locale },
    },
  };
}

export function appInitialProps(queries = []) {
  return async (app) => {
    var initialProps = await NextApp.getInitialProps(app);
    const context = app.ctx;
    if (context.res)
      context.res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59",
      );
    const props = await executeInitialProps(context, initialProps, queries);
    return props;
  };
}
export const PageContext = createContext();
export default function ProviderNext(props) {
  const { pageProps = {} } = props;
  const state = getApolloState(pageProps);
  const variables = getVariables(pageProps);
  const client = useMemo(() => initializeApollo(state, variables), [pageProps]);
  return <ApolloProvider {...props} client={client} />;
}
