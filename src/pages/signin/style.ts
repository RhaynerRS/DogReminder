import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: "Poppins_400Regular",
    color: "#05322B",
    textAlign: "center",
  },
  container: {
    padding:20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 273,
    height: 364,
    transform: [{ translateY:40}],
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_300Light",
    textAlign: "left",
    paddingHorizontal: 15,
    fontWeight: "200",
  },
});
