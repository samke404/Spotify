import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTabNavigator from "./src/navigators/MainTabNavigator";
import TracklistScreen from "./src/Components/TracklistScreen";
import AlbumScreen from "./src/Components/AlbumScreen";
import ArtistSummaryScreen from "./src/Components/ArtistSummaryScreen";
import * as Font from "expo-font";


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="black" />
        <AlbumScreen />
        <ArtistSummaryScreen />
        <TracklistScreen />
        <MainTabNavigator />
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
