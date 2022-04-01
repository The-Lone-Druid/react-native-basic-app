import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 35,
    zIndex: 9,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
  },
});

export default styles;
