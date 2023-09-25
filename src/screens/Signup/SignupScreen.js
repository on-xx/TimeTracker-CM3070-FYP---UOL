import {Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import MainLogo from '../../components/MainLogo/MainLogo';
import globalStyle from '../../../assets/styles/GlobalStyle';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import HeaderSubtitle from '../../components/HeaderSubtitle/HeaderSubtitle';
import TextInputPrimary from '../../components/TextInputPrimary/TextInputPrimary';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ButtonTransparent from '../../components/ButtonTransparent/ButtonTransparent';
import {Routes} from '../../navigation/Routes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signupHandler = async (name, email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);

    await firestore().collection('users').doc(auth().currentUser.uid).set({
      name,
      email,
    });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid'};
    }

    return error;
  }
};

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={globalStyle.flex}>
      <MainLogo marginTop={40} />
      <View style={style.headerTitleContainer}>
        <HeaderTitle title={'Create'} />
        <HeaderTitle title={'New Account'} />
        <HeaderSubtitle subtitle={'Please Fill Up The Signup Form'} />
      </View>
      <View style={style.signupFormContainer}>
        <TextInputPrimary
          label={'Name'}
          placeholder={'Name'}
          onTextChange={text => setName(text)}
        />
        <TextInputPrimary
          label={'Email'}
          placeholder={'Email'}
          onTextChange={text => setEmail(text)}
        />
        <TextInputPrimary
          label={'Password'}
          placeholder={'Password'}
          onTextChange={text => setPassword(text)}
        />
      </View>
      <ButtonPrimary
        title={'Sign Up'}
        onPressed={() => signupHandler(name, email, password)}
      />
      <View style={style.signinGuideContainer}>
        <Text style={style.signinGuideText}>Already Have An Account?</Text>
        <ButtonTransparent
          title={'SIGN IN'}
          onPressed={() => {
            navigation.navigate(Routes.SIGNIN);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
