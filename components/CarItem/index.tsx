import { ImageBackground, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

type Props = {};

const CarItem = (props: Props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        text={"custom order"}
        onPress={() => {
          console.log("Custom order button was pressed");
        }}
      />
      <StyledButton
        type="secondary"
        text={"existing inventory"}
        onPress={() => {
          console.log("existing inventory button was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
