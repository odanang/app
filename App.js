import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme, useFonts } from "./theme";
import pages from "./pages";

import { ProviderNative } from "./ui/Provider";
import HeaderSimple from "./ui/Headers/Simple";
import { AppRegistry } from "react-native";

function App() {
  useFonts();
  return (
    <NativeBaseProvider theme={theme}>
      <ProviderNative navigation={pages} header={HeaderSimple} />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("Odanang", () => App);
export default App;
