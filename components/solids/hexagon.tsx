import { StyleSheet, View } from "react-native";

const Hexagon = () => {
  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonInner} />
      <View style={styles.hexagonBefore} />
      <View style={styles.hexagonAfter} />
    </View>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    width: 35,
    height: 19.25, // 55 * 0.35
    alignItems: "center",
    justifyContent: "center",
  },
  hexagonInner: {
    width: 35,
    height: 19.25,
    backgroundColor: "#3498db",
  },
  hexagonBefore: {
    position: "absolute",
    top: -9.625, // 27.5 * 0.35
    width: 0,
    height: 0,
    borderLeftWidth: 17.5, // 50 * 0.35
    borderLeftColor: "transparent",
    borderRightWidth: 17.5,
    borderRightColor: "transparent",
    borderBottomWidth: 9.625,
    borderBottomColor: "#3498db",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -9.625,
    width: 0,
    height: 0,
    borderLeftWidth: 17.5,
    borderLeftColor: "transparent",
    borderRightWidth: 17.5,
    borderRightColor: "transparent",
    borderTopWidth: 9.625,
    borderTopColor: "#3498db",
  },
});

export default Hexagon;
