import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const tracks = [
  {
    id: 1,
    title: "i'm Fine - IMANU Remix",
    playCount: 100,
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 2,
    title: "i'm Fine",
    playCount: 100,
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 3,
    title: "NS Bounce",
    playCount: 100,
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 4,
    title: "3 Words",
    playCount: 100,
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
  {
    id: 5,
    title: "Okarina od Time",
    playCount: 100,
    artistImage:
      "https://i1.sndcdn.com/artworks-000080763273-uevjwm-t240x240.jpg",
  },
];

const TracklistScreen = () => {
  const renderTrack = ({ item, index }) => (
    <TouchableOpacity style={styles.trackContainer}>
      <View style={styles.trackInfoContainer}>
        <Text style={styles.trackTitle}>{index + 1}. </Text>
        <Image source={{ uri: item.artistImage }} style={styles.artistImage} />
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.playCount}>{item.playCount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Okudumile</Text>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTrack}
        contentContainerStyle={styles.trackListContainer}
      />
    </View>
  );
};

export default TracklistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
  },
  trackListContainer: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  trackContainer: {
    
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
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
    color:"white",
    backgroundColor:"black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
