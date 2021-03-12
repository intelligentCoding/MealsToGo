import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestuarantScreen } from "./src/features/restaurants/screens/restaurant-info.screen";

export default function App() {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
