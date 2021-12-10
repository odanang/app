import React, { useMemo } from "react";
import Markdown from "react-native-markdown-display";

const style = {
  // Paras
  paragraph: {
    fontFamily: "Lexend_400Regular",
    color: "#27272a",
    lineHeight: 1.5,
  },

  // Headings
  heading1: {
    fontSize: 30,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 2.2,
  },
  heading2: {
    fontSize: 24,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 1.75,
  },
  heading3: {
    fontSize: 20,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 1.75,
  },
  heading4: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 1.5,
  },
  heading5: {
    fontSize: 16,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 1.375,
  },
  heading6: {
    fontSize: 14,
    fontFamily: "Lexend_600SemiBold",
    color: "#27272a",
    lineHeight: 1.25,
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
    borderWidth: 1,
    borderColor: "#f4f4f5",
  },
  thead: {},
  tbody: {},
  th: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "#f4f4f5",
  },
  tr: {
    flexDirection: "row",
  },
  td: {
    borderWidth: 1,
    borderColor: "#f4f4f5",
    flex: 1,
    padding: 5,
  },

  // Images
  image: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
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
    return <Markdown children={children} style={style} />;
  }, [children]);
}
