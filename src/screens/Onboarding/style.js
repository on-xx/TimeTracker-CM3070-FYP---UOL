import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  onboardingContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitleContainer: {
    alignItems: 'center',
    marginTop: 14,
  },
  subTitle: {
    color: '#8c8c8c',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default style;
