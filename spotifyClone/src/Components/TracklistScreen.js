import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";

const tracks = [
  {
    id: 1,
    title: "i'm Fine - IMANU Remix",
    playCount: "823,428",
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 2,
    title: "i'm Fine",
    playCount: "1043,056",
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 3,
    title: "NS Bounce",
    playCount: "618,909",
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 4,
    title: "3 Words",
    playCount: "412,879",
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 5,
    title: "Okarina of Time",
    playCount: "234,908",
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
];

const TracklistScreen = () => {
  const renderTrack = ({ item, index }) => (
    <TouchableOpacity style={styles.trackContainer}>
      <View style={styles.trackInfoContainer}>
        <Text style={styles.trackTitle}>{index + 1} </Text>
        <Image source={{ uri: item.artistImage }} style={styles.artistImage} />
        <View style={styles.textContainer}>
          <Text style={styles.trackTitle}>{item.title}</Text>
          <Text style={styles.playCount}>{item.playCount}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="#999"
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Okudumile</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={tracks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTrack}
          contentContainerStyle={styles.trackListContainer}
        />
      </View>
    </View>
  );
};

export default TracklistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    position: "relative",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 25,
  },
  trackListContainer: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    //marginBottom: 0,
    marginTop: 20,
  },
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginTop: "auto",
  },
  trackInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  trackTitle: {
    color: "white",
    fontWeight: "normal",
    fontSize: 16,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    marginBottom: 20,
  },
  trackStatsContainer: {
    marginLeft: "auto",
  },
  playCount: {
    alignContent: "center",
    fontSize: 12,
    color: "#999",
  },

  headerText: {
  color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 16,
},

  icon: {
    flex: 1,
    marginHorizontal: 150,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "flex-start",
    //marginTop: -1,
  },
});
