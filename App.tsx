// import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model 3"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
