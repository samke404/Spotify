import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ArtistSummaryScreen = () => {
  return (
    <LinearGradient colors={["#434343", "#000000"]} style={styles.container}>
      <Text style={styles.title}>Abalaleli banyanga abangu-166,307</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>ABALANDELAYO</Text>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="#CCCCCC"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/w81zzd9ey30pm33feoq7/high-klassified?fimg-ssr",
          }}
          style={styles.cover}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.coverTitle}>izingoma ezithandiwayo</Text>
          <Text style={styles.subTitle}>5 izingoma • High Klassified</Text>
        </View>
        <View style={styles.playContainer}>
          <View style={styles.play}>
            <AntDesign name="play" size={75} color="green" />
          </View>
        </View>
        <View style={styles.rightIconContainer}>
          <AntDesign name="right" size={24} color="white" />
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
    color: "#FFFFFF",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    width: "27%",
    borderColor: "white",
    justifyContent: "space-between",
  },
  boxTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginRight: 10,
    color: "white",
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
    color: "white",
  },
  playContainer: {
    position: "relative",
    top: -100,
    left: 20,
    zIndex: 1,
   backgroundColor: "white",
    borderRadius: 80,
    
  },
  play: {
 borderRadius: 100,
  width: 75,
  height: 75,
  alignItems: "center",
  justifyContent: "center",
},
});

export default ArtistSummaryScreen;