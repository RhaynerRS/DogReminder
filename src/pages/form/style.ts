import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily:"Poppins_400Regular",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    textAlign: "left",
  },
  buttons: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  inline: {
    marginTop: 20,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
});
