import { Text, View } from "react-native";
import React from 'react'
import {TouchableOpacity} from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("TracklistScreen")}>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen
