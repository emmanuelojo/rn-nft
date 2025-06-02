import { Layout } from "@/constants/Layout";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

const BidCard = () => {
  const handlePress = () => {
    Haptics.selectionAsync();
    router.push("/new-collectible");
  };

  const imageUrl = require("@/assets/images/nft/nft1.jpg");
  const profileImageUrl = require("@/assets/images/nft/nft3.jpg");

  return (
    <ImageBackground
      source={imageUrl}
      resizeMode="cover"
      style={{
        height: 450,
        width: Layout.width - 32,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#ffffff95",
        overflow: "hidden",
      }}
    >
      <View style={{ flexDirection: "column", gap: 4, padding: 16, backgroundColor: "#23262F50", borderRadius: 12 }}>
        <View style={styles.flex}>
          <Text style={{ fontSize: 24, fontWeight: 600, color: "white" }}>Mind</Text>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "white" }}>1.10 ETH</Text>
        </View>

        <View style={[styles.flex, { alignItems: "center" }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <ImageBackground
              source={profileImageUrl}
              resizeMode="cover"
              style={{ width: 30, height: 30, backgroundColor: "gray", borderRadius: "100%", overflow: "hidden" }}
            ></ImageBackground>
            <Text style={{ fontWeight: 500, color: "white" }}>Jailyn Crona</Text>
          </View>

          <Text style={{ color: "#ffffff95" }}>$2,398.10</Text>
        </View>
      </View>

      <Pressable
        onPress={handlePress}
        style={{
          width: "auto",
          marginHorizontal: "auto",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            marginHorizontal: "auto",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#23262F50",
            borderRadius: "100%",
          }}
        >
          <Feather name="play" size={24} color="white" />
        </View>
      </Pressable>

      <View
        style={{
          width: "auto",
          marginHorizontal: "auto",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#23262F80",
          paddingHorizontal: 18,
          paddingVertical: 10,
          borderRadius: 16,
          cursor: "pointer",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Place a bid</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
});
export default BidCard;
