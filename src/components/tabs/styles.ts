import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabs: {
    position: "absolute",
    width: "100%",
    zIndex: 100,
    bottom: 0,
    elevation: 0,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    top: 5,
  },
});
