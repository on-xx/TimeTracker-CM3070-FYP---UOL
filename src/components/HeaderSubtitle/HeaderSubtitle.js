import { Text, View } from "react-native";
import React from "react";
import style from "./style";

const HeaderSubtitle = ({ subtitle }) => {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default HeaderSubtitle;
