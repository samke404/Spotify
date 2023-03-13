import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../pages/HomeScreen";
import SearchScreen from "../pages/SearchScreen";
import LibraryScreen from "../pages/LibraryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          elevation: 0,
          bottom: 5,
          paddingHorizontal: 45,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return(
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
            );
          },
          tabBarInactiveTintColor: "#fffa",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return(
             <Ionicons name={"search"}
              size={24} 
              color={color} />
            );
          },
          tabBarInactiveTintColor: "#fffa",
          tabBarActiveTintColor: "#fff",
        }}
      />

      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return(
            <Ionicons
              name={focused ? "library" : "library-outline"}
              size={24}
              color={color}
            />
            );
          },
          tabBarInactiveTintColor: "#fffa",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
