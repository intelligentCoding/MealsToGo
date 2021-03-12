import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestuarantScreen } from "./src/features/restaurants/screens/restaurant-info.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
