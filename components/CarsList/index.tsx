import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import CarItem from "../CarItem";
import cars from "./cars";

type Props = {};

const CarsList = (props: Props) => {
  const height = Dimensions.get("window").height + 35;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem key={item.id} car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
      />
    </View>
  );
};

export default CarsList;
