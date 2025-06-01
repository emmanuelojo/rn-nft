import Screen from "@/components/Screen";
import { Layout } from "@/constants/Layout";
import { Text } from "react-native";

const ProfileScreen = () => {
  return (
    <Screen style={{ height: Layout.height, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Add screen</Text>
    </Screen>
  );
};

export default ProfileScreen;
