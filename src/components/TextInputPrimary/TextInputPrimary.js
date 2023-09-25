import { Text, TextInput, View } from "react-native";
import React from "react";
import style from "./style";

const TextInputPrimary = ({
  label,
  placeholder,
  placeholderColor,
  onTextChange,
}) => {
  return (
    <View style={style.textInputWrapper}>
      <View style={style.textInputLabelContainer}>
        <Text style={style.textInputLabel}>{label}</Text>
      </View>
      <View style={style.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={(value) => onTextChange(value)}
        />
      </View>
    </View>
  );
};

export default TextInputPrimary;
