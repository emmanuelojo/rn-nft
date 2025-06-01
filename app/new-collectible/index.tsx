import CollectibleCard from "@/components/nft/CollectibleCard";
import CreateCollectibleCard from "@/components/nft/CreateCollectibleCard";
import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { Collectible } from "@/types/Collectible";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

interface ColumnProps {
  data: Collectible[];
}

const chunkArray = (arr: any, size: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + 2));
  }
  return chunked;
};

const DynamicColumnLayout = ({ data }: ColumnProps) => {
  const rows = chunkArray(data, 2);

  return (
    <View style={{ flexDirection: "column", gap: 4, marginTop: 24, marginBottom: 30 }}>
      <CreateCollectibleCard />
      {/* <CollectibleCard key={rowIndex} collectible={collectible} onPress={() => {}} /> */}

      {rows.map((row, rowIndex) => (
        <View key={rowIndex}>
          {row.map((item: Collectible, index: number) => (
            <CollectibleCard key={index} collectible={item} onPress={() => {}} />
          ))}
        </View>
      ))}
    </View>
  );
};

const NewCollectible = () => {
  const [selectedCollectibles, setSelectedCollectibles] = useState<Collectible[]>([]);
  const router = useRouter();

  const collectibles: Collectible[] = [
    {
      id: 1,
      name: "The great collection",
      image: require("@/assets/images/nft/nft1.jpg"),
    },
    {
      id: 2,
      name: "Ultrafine 3D icons",
      image: require("@/assets/images/nft/nft2.jpg"),
    },
    {
      id: 3,
      name: "Bento illustration",
      image: require("@/assets/images/nft/nft3.jpg"),
    },
    {
      id: 4,
      name: "Robot collection",
      image: require("@/assets/images/nft/nft4.jpg"),
    },
    {
      id: 5,
      name: "Amazing collection",
      image: require("@/assets/images/nft/nft5.jpg"),
    },
  ];

  const goBack = () => {
    router.push("/(tabs)");
  };

  const handleToggle = (item: Collectible) => {
    setSelectedCollectibles((prev) => {
      const exists = prev.some((f) => f.id === item.id);
      if (exists) {
        return prev.filter((f) => f.id !== item.id); // remove
      } else {
        return [...prev, item]; // add
      }
    });
  };

  return (
    <Screen
      style={{
        paddingVertical: 16,
        flexDirection: "column",
        gap: 16,
        backgroundColor: Colors.dark.black,
      }}
    >
      {/* <ScrollView
      
      > */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 16,
          marginHorizontal: 32,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Pressable
          onPress={goBack}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <Feather name="chevron-left" color="white" size={20} />
        </Pressable>

        <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>New Collectible</Text>
      </View>

      {/* <Animated.View
        entering={FadeInUp.delay(20).duration(1000).springify()}
        style={{ flexDirection: "row", alignItems: "center", paddingVertical: 16, marginHorizontal: 30, gap: 16 }}
      >
        <Feather name="check" color="green" size={18} />
        <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>Auto saved</Text>
      </Animated.View> */}

      <View
        style={{
          flexDirection: "column",
          gap: 16,
          // border Radius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Colors.dark.gray,
          padding: 16,
        }}
      >
        {/* Selected collection count */}
        <View style={{ flexDirection: "column", gap: 4 }}>
          {selectedCollectibles.length > 0 && (
            <Animated.View
              entering={FadeInUp.delay(20).duration(1000).springify()}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              >
                <Text style={{ fontSize: 12, color: "black" }}>{selectedCollectibles.length}</Text>
              </View>
              <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                Collection{selectedCollectibles.length > 1 ? "s" : ""}
              </Text>
            </Animated.View>
          )}

          <Text style={{ fontSize: 12, color: "#ffffff50" }}>Choose from our many collections or create a new one</Text>
        </View>

        {/* Collectibles */}
        <View style={{ flexDirection: "column", gap: 4, marginTop: 24, marginBottom: 50 }}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <CreateCollectibleCard />
            <CollectibleCard collectible={collectibles[0]} onPress={handleToggle} />
          </View>

          <FlatList
            data={collectibles.slice(1)}
            renderItem={({ item }) => <CollectibleCard collectible={item} onPress={handleToggle} />}
            numColumns={2}
            ListFooterComponent={
              <Pressable style={{ marginTop: 40 }}>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  style={{
                    width: Layout.width * 0.75,
                    height: 40,
                    backgroundColor: Colors.dark.yellow,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: "auto",
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ color: Colors.dark.black, fontSize: 14, fontWeight: "500" }}>Upload item</Text>
                </Animated.View>
              </Pressable>
            }
          />
        </View>
      </View>
    </Screen>
  );
};

export default NewCollectible;
