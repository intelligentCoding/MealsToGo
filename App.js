import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';


const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
  <>
    <SafeAreaView style={{felx:1, marginTop: StatusBar.currentHeight}}>
      <View style={{padding:16, backgroundColor:"green"}}>
        <Text>Search</Text>
      </View>
      <View style={{ padding:16, backgroundColor:"blue"}}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"/>
  </>
  );
}

const styles = StyleSheet.create({

});
