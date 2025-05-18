import HomeScreen from "@/app/(tabs)";
import ActivitiesScreen from "@/app/(tabs)/activities";
import ProfileScreen from "@/app/(tabs)/profile";
import SearchScreen from "@/app/(tabs)/search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
