import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { Platform, SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Screen = ({ style, children }: Props) => {
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: Colors.dark.gray,
  },
});

export default Screen;
