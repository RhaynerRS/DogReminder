import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 65,
    backgroundColor: "#000",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontFamily: "Helvetica",
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 36,
  },
});
