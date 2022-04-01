import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height + 35,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  borderBottom: {
    textDecorationLine: "underline",
  },
});

export default styles;
