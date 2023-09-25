import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/GlobalStyle';

const style = StyleSheet.create({
  timePickerContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePickerText: {
    color: colors.primary_color,
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeLogContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeLog: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLogBoxes: {
    flexDirection: 'row',
  },
  timeLogBox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
  },
  monthlySummaryContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryPercentage: {
    fontSize: 30,
    color: colors.primary_color,
    fontWeight: 'bold',
  },
});

export default style;
