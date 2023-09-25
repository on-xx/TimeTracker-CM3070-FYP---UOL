import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import MainLogo from '../../components/MainLogo/MainLogo';
import globalStyle from '../../../assets/styles/GlobalStyle';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import auth from '@react-native-firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from '@react-native-firebase/firestore';

const StatsScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState({});

  console.log(data);

  const handlerSignOut = async () => {
    await auth().signOut();
  };

  const hoursArray = Array.from({length: 24}, (_, i) =>
    i.toString().padStart(2, '0'),
  );

  const formattedDate = selectedDate.toISOString().split('T')[0];
  const userUid = auth().currentUser.uid;
  const docPath = `users/${userUid}/tasks/${formattedDate}`;

  useEffect(() => {
    const unsubscribe = firestore()
      .doc(docPath)
      .onSnapshot(doc => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          setData({});
        }
      });

    return () => {
      unsubscribe();
    };
  }, [docPath]);

  return (
    <SafeAreaView style={globalStyle.flex}>
      <ScrollView>
        <MainLogo marginTop={10} />
        <View style={style.timePickerContainer}>
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, newDate) => {
              setSelectedDate(newDate || selectedDate);
            }}
          />
        </View>
        <View style={style.timeLogContainer}>
          {hoursArray.map(hour => (
            <View style={style.timeLog} key={hour}>
              <Text>{hour}:00</Text>
              <View style={style.timeLogBoxes}>
                <View style={style.timeLogBox}></View>
                <View style={style.timeLogBox}></View>
                <View style={style.timeLogBox}></View>
                <View style={style.timeLogBox}></View>
                <View style={style.timeLogBox}></View>
                <View style={style.timeLogBox}></View>
              </View>
            </View>
          ))}
        </View>

        <View style={style.monthlySummaryContainer}>
          <Text style={style.summaryTitle}>
            You Stayed Productive For August
          </Text>
          <Text style={style.summaryPercentage}>20%</Text>
        </View>

        <ButtonPrimary title={'Sign Out'} onPressed={handlerSignOut} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatsScreen;
