import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { theme, useFonts } from "./theme";
import pages from "./pages";
import * as Font from "expo-font";

import { ProviderNative } from "./ui/Provider";
import HeaderSimple from "./ui/Headers/Simple";
import { AppRegistry } from "react-native";

import {
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync({
      Lexend_300Light,
      Lexend_400Regular,
      Lexend_500Medium,
      Lexend_600SemiBold,
      Lexend_700Bold,
    });
    setfontLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!fontLoaded) return null;
  return (
    <NativeBaseProvider theme={theme}>
      <ProviderNative navigation={pages} header={HeaderSimple} />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("Odanang", () => App);
export default App;
