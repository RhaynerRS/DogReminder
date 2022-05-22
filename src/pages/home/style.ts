import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3048EA",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: "row",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 20,
    justifyContent: "center",
  },
  content: {
    marginTop: 42,
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderRadius: 25,
    paddingTop: 25,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
  titles: {
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 15,
    marginLeft: 35,
    color: "#fff",
  },
});
