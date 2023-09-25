import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  mainLogoContainer: {
    width,
    alignItems: 'center',
  },
});

export default style;
