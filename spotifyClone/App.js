import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTabNavigator from "./src/navigators/MainTabNavigator";
import TracklistScreen from "./src/Components/TracklistScreen";
import AlbumScreen from "./src/Components/AlbumScreen";
import ArtistSummaryScreen from "./src/Components/ArtistSummaryScreen";


export default function App() {

    return (
      <NavigationContainer>
        <StatusBar style="black"></StatusBar>
        <AlbumScreen/>
        <ArtistSummaryScreen/>
        <TracklistScreen />
        <MainTabNavigator />
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
