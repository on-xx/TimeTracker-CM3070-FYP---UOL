import {Text, View, Image} from 'react-native';
import React from 'react';
import style from './style';

const MainLogo = ({marginTop}) => {
  return (
    <View style={[style.mainLogoContainer, {marginTop: marginTop}]}>
      <Image
        style={style.mainLogo}
        source={require('../../../assets/image/logo.png')}
      />
    </View>
  );
};

export default MainLogo;
