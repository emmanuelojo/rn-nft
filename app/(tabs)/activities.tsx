import Screen from "@/components/Screen";
import { Layout } from "@/constants/Layout";
import { Text } from "react-native";

const ActivitiesScreen = () => {
  return (
    <Screen style={{ height: Layout.height, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Activities screen</Text>
    </Screen>
  );
};

export default ActivitiesScreen;
