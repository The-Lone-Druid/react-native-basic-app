// import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
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
