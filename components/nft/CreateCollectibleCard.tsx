import { Layout } from "@/constants/Layout";
import { Collectible } from "@/types/Collectible";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface Props {
  handleClick?: (val: Collectible) => void;
}

const CreateCollectibleCard = ({ handleClick }: Props) => {
  return (
    <Pressable onPress={() => {}}>
      <View
        style={{
          width: Layout.width / 2 - 16,
          height: 150,
          flexDirection: "column",
          gap: 8,
          borderRadius: 20,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: "#ffffff50",
          padding: 16,
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
        >
          <Feather name="plus" size={18} />
        </View>

        <Text
          style={{
            position: "absolute",
            left: 16,
            bottom: 16,
            width: 100,
            color: "white",
            fontWeight: "500",
          }}
        >
          Create collection
        </Text>
      </View>
    </Pressable>
  );
};

export default CreateCollectibleCard;
