import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

// const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Searchbar />
        <Text style={styles.text}>Main Page</Text>
      </View>
      <View style={styles.main}>
        <Text>List</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: isAndroid ? 20 : 0
    marginTop: StatusBar.currentHeight,
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 15,
  },
  main: {
    backgroundColor: "grey",
    padding: 16,
    flex: 1,
  },
});
