import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/GlobalStyle';

const style = StyleSheet.create({
  infoTextContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary_color,
  },
  infoSubText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  timerContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 30,
    color: colors.primary_color,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startButton: {
    width: 160,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary_color,
    borderRadius: 10,
  },
  pauseButton: {
    width: 160,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryTextContainer: {
    height: 180,
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 30,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  summaryTime: {
    fontSize: 20,
    color: colors.primary_color,
    fontWeight: 'bold',
  },
});

export default style;
