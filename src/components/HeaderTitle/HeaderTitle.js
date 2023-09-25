import {Text, View} from 'react-native';
import React from 'react';
import style from './style';
import {colors} from '../../../assets/styles/GlobalStyle';

const HeaderTitle = ({title}) => {
  // Check if "Recipe" is present in the title
  const isRecipeIncluded = title.includes('Time');

  return (
    <View style={style.headerTitleContainer}>
      <Text style={style.headerTitle}>
        {isRecipeIncluded ? (
          <>
            <Text style={{color: colors.primary_color}}>Time</Text>
            {title.replace('Time', '')}
          </>
        ) : (
          title
        )}
      </Text>
    </View>
  );
};

export default HeaderTitle;
