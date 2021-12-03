import React, { useMemo } from "react";
import Markdown from "react-native-markdown-display";

const style = {
  // Paras
  paragraph: {
    fontFamily: "Lexend_400Regular",
    color: "#27272a",
    lineHeight: "1.5em",
  },

  // Headings
  heading1: {
    fontSize: 30,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "2em",
  },
  heading2: {
    fontSize: 24,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "1.75em",
  },
  heading3: {
    fontSize: 20,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "1.75em",
  },
  heading4: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "1.5em",
  },
  heading5: {
    fontSize: 16,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "1.375em",
  },
  heading6: {
    fontSize: 14,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: "1.25em",
  },

  // Horizontal Rule
  hr: {
    backgroundColor: "#e4e4e7",
    height: 1,
    marginBottom: 6,
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontFamily: "Lexend_400Regular",
    color: "#27272a",
    lineHeight: "1.5em",
  },

  // Links
  link: {
    textDecorationLine: "none",
    color: "#16a34a",
  },

  // Blockquotes
  blockquote: {
    backgroundColor: "#fafafa",
    borderColor: "#e4e4e7",
    borderLeftWidth: 3,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  // Tables
  table: {
    borderWidth: "0.5px",
    borderColor: "#f4f4f5",
    borderCollapse: "collapse",
  },
  thead: {},
  tbody: {},
  th: {
    padding: 5,
    flex: 1,
    borderWidth: "0.5px",
    borderColor: "#f4f4f5",
  },
  tr: {
    flexDirection: "row",
  },
  td: {
    borderWidth: "0.5px",
    borderColor: "#f4f4f5",
    flex: 1,
    padding: 5,
  },

  // Images
  image: {
    marginTop: 10,
    marginBottom: 10,
    display: "block",
  },
};

export default function Field({
  children = "",
  round,
  step,
  className,
  strongProps,
  pProps,
  ...props
}) {
  return useMemo(() => {
    return <Markdown children={children} style={style} mergeStyle="true" />;
  }, [children]);
}
