import CollectibleCard from "@/components/nft/CollectibleCard";
import CreateCollectibleCard from "@/components/nft/CreateCollectibleCard";
import Screen from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { Collectible } from "@/types/Collectible";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

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
    <View style={{ flexDirection: "column", gap: 4, marginTop: 24, marginBottom: 50 }}>
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
  const router = useRouter();

  const goBack = () => {
    router.push("/(tabs)");
  };

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

      <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 16, marginHorizontal: 30, gap: 16 }}>
        <Feather name="check" color="green" size={18} />
        <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>Auto saved</Text>
      </View>

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
          <View
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
              <Text style={{ fontSize: 12, color: "black" }}>2</Text>
            </View>
            <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>Collection</Text>
          </View>
          <Text style={{ fontSize: 12, color: "#ffffff50" }}>Choose our many collections or create a new one</Text>
        </View>

        {/* Collectibles */}
        <View style={{ flexDirection: "column", gap: 4, marginTop: 24, marginBottom: 50 }}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <CreateCollectibleCard />
            <CollectibleCard collectible={collectibles[0]} onPress={() => {}} />
          </View>

          {/* {collectibles.map((collectible, index) => (
              <CollectibleCard key={index} collectible={collectible} onPress={() => {}} />
            ))} */}

          <FlatList
            data={collectibles.slice(1)}
            renderItem={({ item }) => <CollectibleCard collectible={item} onPress={() => {}} />}
            numColumns={2}
          />
        </View>

        {/* <DynamicColumnLayout data={collectibles} /> */}

        {/* <FlatList
            data={collectibles}
            renderItem={({ item }) => <CollectibleCard collectible={item} onPress={() => {}} />}
            numColumns={2}
          /> */}

        {/* CTA */}
        <Pressable>
          <View
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
          </View>
        </Pressable>
      </View>
      {/* </ScrollView> */}
    </Screen>
  );
};

export default NewCollectible;
