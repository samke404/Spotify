import { StyleSheet, Text, View } from "react-native";
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
        <Text>View Artist</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})