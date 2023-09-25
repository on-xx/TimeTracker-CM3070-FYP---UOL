import {Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import globalStyle from '../../../assets/styles/GlobalStyle';
import MainLogo from '../../components/MainLogo/MainLogo';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import HeaderSubtitle from '../../components/HeaderSubtitle/HeaderSubtitle';
import TextInputPrimary from '../../components/TextInputPrimary/TextInputPrimary';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ButtonTransparent from '../../components/ButtonTransparent/ButtonTransparent';
import {Routes} from '../../navigation/Routes';
import auth from '@react-native-firebase/auth';

const signinHandler = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={globalStyle.flex}>
      <MainLogo marginTop={40} />
      <View style={style.headerTitleContainer}>
        <HeaderTitle title={'WELCOME TO'} />
        <HeaderTitle title={'TimeTracker'} />
        <HeaderSubtitle subtitle={'Please Sign In Your Registerd Email'} />
      </View>
      <View style={style.textInputContainer}>
        <TextInputPrimary
          label={'Email'}
          placeholder={'Email'}
          placeholderColor={'#828282'}
          onTextChange={text => setEmail(text)}
        />
        <TextInputPrimary
          label={'Password'}
          placeholder={'Passowrd'}
          placeholderColor={'#828282'}
          onTextChange={text => setPassword(text)}
        />
      </View>
      <View style={style.signinButtonContainer}>
        <ButtonPrimary
          title={'Sign In'}
          onPressed={() => {
            signinHandler(email, password);
          }}
        />
      </View>
      <View style={style.signupGuideContainer}>
        <Text style={style.signupGuideText}>Don't Have An Account Yet?</Text>
        <ButtonTransparent
          title={'SIGN UP'}
          onPressed={() => {
            navigation.navigate(Routes.SIGNUP);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
