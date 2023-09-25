import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/GlobalStyle';

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary_color,
    paddingVertical: 18,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 82,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default style;
