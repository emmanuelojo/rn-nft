import BidCard from "@/components/nft/BidCard";
import Screen from "@/components/Screen";
import BestSellers from "@/components/sellers/BestSellers";
import { Feather } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          flexDirection: "column",
          gap: 16,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>NFTGalleryHub</Text>

          <Feather name="menu" size={20} color="#ffffff" />
        </View>

        <View style={{ flexDirection: "column", gap: 16 }}>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              marginTop: 28,
            }}
          >
            <Text style={{ color: "white", fontSize: 32, fontWeight: 600 }}>Best sellers</Text>
            <Feather name="chevron-right" size={20} color="#ffffff" />
          </View>

          <BestSellers />
        </View>

        <View style={{ flexDirection: "column", gap: 16, marginBottom: 80 }}>
          <BidCard />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
