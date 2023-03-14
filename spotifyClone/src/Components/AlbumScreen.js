import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const AlbumScreen = () => {
  return (
    <View style={{ flex: 1.5 }}>
      <Image
        source={{
          uri: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/w81zzd9ey30pm33feoq7/high-klassified?fimg-ssr",
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 55,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          High Klassified
        </Text>
      </View>
    </View>
  );
};

export default AlbumScreen;
