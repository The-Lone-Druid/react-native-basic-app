import { ImageBackground, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

type Props = {};

const CarItem = ({ car }: Props | any) => {
  const { image, name, tagline, taglineCTA } = car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.borderBottom}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;
