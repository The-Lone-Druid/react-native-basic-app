import { ImageBackground, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

type Props = {
  name: string;
  tagLine: string;
  image: string | any;
  tagLineCTA: string;
};

const CarItem = ({ name, tagLine, tagLineCTA, image }: Props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.borderBottom}>{tagLineCTA}</Text>
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
