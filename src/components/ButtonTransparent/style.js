import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/GlobalStyle";

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 8,
    marginHorizontal: 30,
  },

  buttonText: {
    fontSize: 20,
    color: colors.primary_color,
    fontWeight: "bold",
  },
});

export default style;
