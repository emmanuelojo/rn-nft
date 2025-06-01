import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 16,
          right: 16,
          height: 65,
          elevation: 0,
          backgroundColor: Colors.dark.gray,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: Layout.width / 5,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Feather size={24} name="home" color={focused ? "white" : "gray"} />
              <Text style={{ color: focused ? "white" : "gray", fontSize: 12, marginTop: 4 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: Layout.width / 5,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Feather size={24} name="search" color={focused ? "white" : "gray"} />
              <Text style={{ color: focused ? "white" : "gray", fontSize: 12, marginTop: 4 }}>Search</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "add",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginBottom: 60,
                width: 60,
                height: 60,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
                backgroundColor: "yellow",
                shadowColor: "yellow",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.4,
                shadowRadius: 20,
              }}
            >
              <Feather size={24} name="camera" color="black" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: Layout.width / 5,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Feather size={24} name="activity" color={focused ? "white" : "gray"} />
              <Text style={{ color: focused ? "white" : "gray", fontSize: 12, marginTop: 4 }}>Activity</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: Layout.width / 5,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Feather size={24} name="user" color={focused ? "white" : "gray"} />
              <Text style={{ color: focused ? "white" : "gray", fontSize: 12, marginTop: 4 }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
