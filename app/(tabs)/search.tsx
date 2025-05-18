import Screen from "@/components/Screen";
import { Layout } from "@/constants/Layout";
import { Text } from "react-native";

const SearchScreen = () => {
  return (
    <Screen style={{ height: Layout.height, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Search screen</Text>
    </Screen>
  );
};

export default SearchScreen;
