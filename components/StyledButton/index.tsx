import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

type Props = {
  type: string;
  text: string;
  onPress: () => void;
};

const StyledButton = ({ type, text, onPress }: Props) => {
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const color = type === "primary" ? "#9f9f9f" : "#171a20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          ...styles.button,
          backgroundColor: backgroundColor,
        }}
      >
        <Text style={{ ...styles.buttonText, color: color }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
