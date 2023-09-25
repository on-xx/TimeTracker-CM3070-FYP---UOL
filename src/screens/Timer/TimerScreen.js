import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Pressable, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  startTimer,
  pauseTimer,
  incrementTime,
  setTime,
} from '../../redux/reducers/TimerSlice';
import style from './style';
import MainLogo from '../../components/MainLogo/MainLogo';
import globalStyle from '../../../assets/styles/GlobalStyle';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const TimerScreen = () => {
  const dispatch = useDispatch();
  const {isRunning, time} = useSelector(state => state.timer);
  const [previousHourProductiveTime, setPreviousHourProductiveTime] =
    useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dayStartTime, setDayStartTime] = useState(new Date());
  const [productiveTime, setProductiveTime] = useState(0);

  const userUid = auth().currentUser.uid;
  const formattedDate = dayStartTime.toISOString().split('T')[0];
  const docRef = firestore()
    .collection('users')
    .doc(userUid)
    .collection('tasks')
    .doc(formattedDate);

  const [lastEntryData, setLastEntryData] = useState({});

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot(doc => {
      if (doc.exists) {
        const data = doc.data();
        if (data && data.productive) {
          setProductiveTime(data.productive);

          setLastEntryData(data);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [docRef]);

  const formatTimeTimer = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')} hour ${String(minutes).padStart(
      2,
      '0',
    )} mins ${String(remainingSeconds).padStart(2, '0')} secs`;
  };

  const handleStartTimer = async () => {
    if (!isRunning) {
      dispatch(startTimer());

      const doc = await docRef.get();

      const currentHour = new Date().getHours();
      if (doc.exists) {
        await docRef.update({
          productive: firestore.FieldValue.arrayUnion({
            hour: `${currentHour}:00`,
            seconds: time,
          }),
        });
      } else {
        await docRef.set({
          date: formattedDate,
          productive: [
            {
              hour: `${currentHour}:00`,
              seconds: time,
            },
          ],
        });
      }

      setPreviousHourProductiveTime(0);
    }
  };

  const handlePauseTimer = async () => {
    dispatch(pauseTimer());

    const currentHour = new Date().getHours();

    const currentHourEntryIndex = lastEntryData.productive.findIndex(
      entry => entry.hour === `${currentHour}:00`,
    );

    const updatedEntryData = {...lastEntryData};

    if (currentHourEntryIndex !== -1) {
      updatedEntryData.productive[currentHourEntryIndex].seconds =
        time - previousHourProductiveTime;

      setPreviousHourProductiveTime(time);
    } else {
      updatedEntryData.productive.push({
        hour: `${currentHour}:00`,
        seconds: time - previousHourProductiveTime,
      });

      setPreviousHourProductiveTime(time);
    }

    await docRef.update({
      productive: updatedEntryData.productive,
    });
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    const now = new Date();
    setCurrentTime(now);

    if (now.getDate() !== dayStartTime.getDate()) {
      const newDayStartTime = new Date(now);
      newDayStartTime.setHours(0, 0, 0, 0);
      setDayStartTime(newDayStartTime);

      docRef.set({
        date: formattedDate,
        productive: [
          {
            hour: `${newDayStartTime.getHours()}:00`,
            productive: 0,
          },
        ],
      });
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const now = new Date();
  const midnight = new Date(dayStartTime);
  midnight.setHours(0, 0, 0, 0);
  const elapsedMillisecondsSinceStart = now - midnight;
  const elapsedSecondsSinceStart = Math.floor(
    elapsedMillisecondsSinceStart / 1000,
  );
  const elapsedHours = Math.floor(elapsedSecondsSinceStart / 3600);
  const elapsedMinutes = Math.floor((elapsedSecondsSinceStart % 3600) / 60);

  return (
    <SafeAreaView style={globalStyle.flex}>
      <ScrollView>
        <MainLogo marginTop={10} />
        <View style={style.infoTextContainer}>
          <Text style={style.infoText}>Everyday 24 Hours Given</Text>
          <Text style={style.infoSubText}>
            Start the timer when you are doing productive work and pause when
            you are not
          </Text>
        </View>
        <View style={style.timerContainer}>
          <Text style={style.time}>{formatTimeTimer(time)}</Text>
        </View>
        <View style={style.buttonsContainer}>
          <Pressable style={style.startButton} onPress={handleStartTimer}>
            <Text style={style.buttonText}>Start</Text>
          </Pressable>
          <Pressable style={style.pauseButton} onPress={handlePauseTimer}>
            <Text style={style.buttonText}>Pause</Text>
          </Pressable>
        </View>
        <View style={style.summaryTextContainer}>
          <View style={style.summaryText}>
            <Text style={style.summaryTitle}>You Stayed Productive For:</Text>
            <Text style={style.summaryTime}>{formatTime(time)}</Text>
          </View>
          <View style={style.summaryText}>
            <Text style={style.summaryTitle}>
              Time Passed Since the Day Started:
            </Text>
            <Text style={style.summaryTime}>
              {`${elapsedHours} Hr ${elapsedMinutes} Mins`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimerScreen;
