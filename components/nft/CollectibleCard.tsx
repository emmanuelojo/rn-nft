import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { Collectible } from "@/types/Collectible";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

interface Props {
  collectible: Collectible;
  onPress: (val: Collectible) => void;
}

const CollectibleCard = ({ collectible, onPress }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onPress(collectible);
  };

  return (
    <Pressable
      onPress={handleClick}
      style={{
        position: "relative",
        width: Layout.width / 2 - 24,
        height: 150,
        backgroundColor: "gray",
        borderColor: isClicked ? Colors.dark.yellow : "",
        borderWidth: 1.5,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 16,
        marginBottom: 16,
      }}
    >
      <ImageBackground
        source={collectible.image}
        resizeMode="cover"
        style={{
          width: Layout.width / 2 - 16,
          height: 150,
          minHeight: 150,
          flex: 1,
          padding: 16,
        }}
      >
        {isClicked && (
          <View
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              left: 10,
              top: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "100%",
            }}
          >
            <Feather name="check" size={16} />
          </View>
        )}

        <Text
          style={{
            position: "absolute",
            left: 16,
            bottom: 16,
            fontSize: 20,
            color: "white",
            fontWeight: "500",
          }}
        >
          {collectible.name}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

export default CollectibleCard;
