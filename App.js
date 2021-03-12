import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestuarantScreen } from "./src/features/restaurants/screens/restaurant-info.screen";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
