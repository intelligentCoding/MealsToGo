/* eslint-disable prettier/prettier */
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestuarantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: { padding: 16, backgroundColor: "green" },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});