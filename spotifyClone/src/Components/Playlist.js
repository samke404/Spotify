import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
//import tracklist from "./src/Data/tracklist";
import { SafeAreaView } from "react-native-safe-area-context";


  const tracklist = [
    {
      id: 1,
      name: "i'm Fine - IMANU Remix",
      downloads: "823,428",
      image: require("../../assets/cover.jpeg"),
    },
    {
      id: 2,
      name: "i'm Fine",
      downloads: "1047,956",
    image: require("../../assets/cover.jpeg"),
    },
    {
      id: 3,
      name: "NS Bounce",
      downloads: "900,178",
      image: require("../../assets/cover.jpeg"),
    },
    {
      id: 4,
      name: "3 Words",
      downloads: "700,008",
      image: require("../../assets/cover.jpeg"),
    },
    {
      id: 5,
      name: "Okarina od Time",
      downloads: "192,827",
      image: require("../../assets/cover.jpeg"),
    },
  ];

  const Playlist = ({ item }) => {
    if (!item) {
      return null;
    }

    return (
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <Image loadingIndicatorSource={item.image} style={styles.avatar} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  const headerComponent = () => {
    return <Text style={styles.listHeader}>Okudumile</Text>;
  };

  const itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  const PlaylistScreen = () => {
    return (
      <SafeAreaView>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={tracklist}
          renderItem={Playlist}
          ItemSeparatorComponent={itemSeparator}
        />
      </SafeAreaView>
    );
  };
  

  

  


export default Playlist;


const styles = StyleSheet.create({
    listHeader: {
    height: 55,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  listHeadLine: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "normal",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  avatarContainer: {
    backgroundColor: "#d909d9",
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 13,
  },
  
});
