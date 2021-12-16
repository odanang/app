// react
import React, { useEffect, useMemo } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// important
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ApolloClient, useQuery, gql, ApolloLink, split } from "@apollo/client";
import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
//
import isEqual from "lodash/isEqual";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import merge from "deepmerge";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingSpinner from "../Loading/LoadingSpinner";

export const USER_AUTH = gql`
  query {
    user: authenticatedUser {
      id
      phone
      name
      email
      avatar {
        publicUrl
      }
      gender
      description
    }
  }
`;
export const APOLLO_STATE_PROP_NAME = "__apollo_state__";
export const VARIABLE_PROP_NAME = "__variable__";
/**
 * @returns {ApolloClient}
 */
const isFile = (value) =>
  (typeof File !== "undefined" && value instanceof File) ||
  (typeof Blob !== "undefined" && value instanceof Blob);

const isUpload = ({ variables }) => Object.values(variables).some(isFile);

function createApolloClient(domain = "_", locale = "_") {
  const uri = "https://odanang.net/admin/api";
  const as =
    process.env.NODE_ENV === "production"
      ? domain
      : process.env.HOST_DEV || "odanang.net";
  const uploadLink = createUploadLink({
    uri,
    headers: {
      as, // HOST env for dev mode
      locale,
    },
  });
  const httpLink = new HttpLink({
    uri,
    headers: {
      as, // HOST env for dev mode
      locale,
    },
  });
  const contextLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem("@token");
    return {
      headers: {
        ...headers,
        as, // HOST env for dev mode
        locale,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const cache = new InMemoryCache();
  return new ApolloClient({
    link: ApolloLink.from([contextLink, uploadLink]),
    // link: ApolloLink.from([uploadLink, contextLink]),
    // link: uploadLink.concat(contextLink),
    // link: split(isUpload, uploadLink, contextLink),
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
        sourceArray.every((s) => !isEqual(d, s))
      ),
    ],
  });
}
/**
 *
 * @param {*} initialState
 * @param {*} param1
 * @returns {ApolloClient}
 */
export function initializeApollo(initialState = null, variables = {}) {
  const { domain = "_", locale = "_" } = variables;
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
  return pageProps[APOLLO_STATE_PROP_NAME];
}

export const AuthContext = createContext();
const Stack = createNativeStackNavigator();
function Native({ navigation, header }) {
  var result = useQuery(USER_AUTH);
  const { loading, error, data = {} } = result;
  const { user = null } = data;
  result.user = user;
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(255, 255, 255)",
    },
  };
  console.log(user);
  if (result.loading) return <LoadingSpinner />;
  return (
    <AuthContext.Provider value={result}>
      <NavigationContainer linking={navigation.linking} theme={customTheme}>
        <Stack.Navigator
          screenOptions={{
            header,
          }}
          initialRouteName={navigation.initialRouteName}
        >
          {navigation.screens?.map((screen, index) => {
            return (
              <Stack.Screen
                {...screen}
                key={screen.name + index}
                component={
                  !user && navigation.auth.requires.includes(screen.name)
                    ? navigation.auth.component
                    : screen.component
                }
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default function ProviderNative(props) {
  const { pageProps = {}, navigation, header } = props;
  const client = useMemo(() => initializeApollo(), [pageProps]);
  return (
    <ApolloProvider client={client}>
      <Native navigation={navigation} header={header} />
    </ApolloProvider>
  );
}
