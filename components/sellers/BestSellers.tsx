import { Feather } from "@expo/vector-icons";
import { ImageBackground, ImageSourcePropType, ScrollView, Text, View } from "react-native";

type SellerProps = {
  user: User;
};

type User = {
  name: string;
  image: ImageSourcePropType;
  amount: number;
  isVerified: boolean;
};

const imageUrl1 = require("@/assets/images/users/user1.jpg");
const imageUrl2 = require("@/assets/images/users/user2.jpg");
const imageUrl3 = require("@/assets/images/users/user3.jpg");
const imageUrl4 = require("@/assets/images/users/user4.jpg");
const imageUrl5 = require("@/assets/images/users/user1.jpg");
const imageUrl6 = require("@/assets/images/users/user2.jpg");

const Seller = ({ user }: SellerProps) => {
  return (
    <View style={{ flexDirection: "row", gap: 16, alignItems: "center", marginRight: 20 }}>
      <View style={{ position: "relative" }}>
        <ImageBackground
          source={user.image}
          resizeMode="cover"
          style={{ width: 80, height: 80, borderRadius: "100%", backgroundColor: "gray", overflow: "hidden" }}
        ></ImageBackground>

        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 25,
            height: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "green",
          }}
        >
          <Feather name="shield" color="green" size={18} />
        </View>
      </View>

      <View>
        <Text style={{ color: "white", fontWeight: 500 }}>{user.name}</Text>
        <Text style={{ color: "white", fontSize: 12 }}>${user.amount}</Text>
      </View>
    </View>
  );
};

const BestSellers = () => {
  const sellers = [
    { name: "Bella Doe", image: imageUrl1, amount: 23102.27, isVerified: true },
    { name: "Arnold Doe", image: imageUrl2, amount: 23102.27, isVerified: true },
    { name: "Candy Doe", image: imageUrl3, amount: 23102.27, isVerified: true },
    { name: "Derrick Doe", image: imageUrl4, amount: 23102.27, isVerified: true },
    { name: "Emma Doe", image: imageUrl5, amount: 23102.27, isVerified: true },
    { name: "Flourish Doe", image: imageUrl6, amount: 23102.27, isVerified: true },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled
      snapToInterval={270 + 24}
      style={{ marginBottom: 20 }}
    >
      {sellers.map((user, index) => (
        <Seller user={user} key={index} />
      ))}
    </ScrollView>
  );
};

export default BestSellers;
