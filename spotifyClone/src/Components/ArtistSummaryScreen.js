import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const ArtistSummaryScreen = () => {
  return (
    <LinearGradient colors={["#434343", "#000000"]} style={styles.container}>
      <Text style={styles.title}>Abalaleli banyanga abangu-166,307</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>ABALANDELAYO</Text>
          <View style={styles.iconContainer}>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="#CCCCCC"
              style={styles.icon}
            />
          </View>
        </View>
      </View>

      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/w81zzd9ey30pm33feoq7/high-klassified?fimg-ssr",
          }}
          style={styles.cover}
        />
        <View style={styles.heartContainer}>
          <Ionicons
            name="heart-circle"
            size={24}
            color="green"
            style={styles.heartIcon}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.coverTitle}>Izingoma Ezithandiwe</Text>
          <Text style={styles.subTitle}>5 Izingoma • High Klassified</Text>
        </View>
        <View style={styles.playContainer}>
          <View style={styles.play}>
            <AntDesign name="play" size={75} color="green" />
          </View>
        </View>
        <View style={styles.shuffleContainer}>
          <Ionicons
            name="shuffle"
            size={15}
            color="green"
            style={styles.shuffleIcon}
          />
        </View>
        <View style={styles.rightIconContainer}>
          <AntDesign name="right" size={24} color="#434343" />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#C0C0C0",
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    
  },
  box: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    width: "auto",
    height: "50%",
    borderColor: "white",
    
  },
  boxTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  icon: {
    marginLeft: 20,
  },
  coverContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    flex: 1,
  },
  cover: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
  coverTitle: {
    fontSize: 15,
    fontWeight: "bold",

    color: "white",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 12,
    color: "#C0C0C0",
  },
  playContainer: {
    position: "relative",
    top: -100,
    left: 55,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 100,
  },
  play: {
    borderRadius: 100,
    width: 74,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -1,
  },
  shuffleContainer: {
    position: "relative",
    bottom: 68,
    left: 30,
    zIndex: 3,
    backgroundColor: "white",
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shuffleIcon: {
    borderRadius: 20,
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  heartContainer: {
    position: "relative",
    top: 15,
    left: -25,
    zIndex: 3,
    backgroundColor: "white",
    borderRadius: 10,
    width: 20,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  heartIcon: {
    borderRadius: 20,
    height: 25,
    left: -1,
    top: -1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    left: 50,
    bottom: 4,
  },
});

export default ArtistSummaryScreen;