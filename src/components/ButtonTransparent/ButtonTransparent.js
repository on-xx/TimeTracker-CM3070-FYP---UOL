import { Text, View, Pressable } from "react-native";
import React from "react";
import style from "./style";

const ButtonTransparent = ({ title, onPressed }) => {
  return (
    <Pressable onPress={onPressed}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonTransparent;
