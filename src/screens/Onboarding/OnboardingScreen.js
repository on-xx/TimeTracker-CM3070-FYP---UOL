import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import style from './style';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import globalStyle from '../../../assets/styles/GlobalStyle';
import MainLogo from '../../components/MainLogo/MainLogo';
import {Routes} from '../../navigation/Routes';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyle.flex}>
      <MainLogo marginTop={40} />
      <View style={style.onboardingContainer}>
        <Image
          style={style.onboarding}
          source={require('../../../assets/image/onboarding.png')}
        />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.title}>Track Your Daily Time Spent</Text>
      </View>
      <View style={style.subTitleContainer}>
        <Text style={style.subTitle}>Stay Productive Everyday!</Text>
      </View>
      <ButtonPrimary
        title={'GET STARTED'}
        onPressed={() => {
          navigation.replace(Routes.SIGNIN);
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
