import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';
import TimerScreen from '../screens/Timer/TimerScreen';
import StatsScreen from '../screens/Stats/StatsScreen';
import TodosScreen from '../screens/Todos/TodosScreen';
import {BarChart2, Clock, Home, List} from 'react-native-feather';
import {colors} from '../../assets/styles/GlobalStyle';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.MAINTABS} component={MainTabs} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary_color,
        tabBarStyle: {
          paddingVertical: 5,
        },
      }}>
      <BottomTabs.Screen
        name={Routes.TIMER}
        component={TimerScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Clock width={size} height={size} stroke={color} />
          ),
          tabBarLabel: 'Timer',
        }}
      />
      <BottomTabs.Screen
        name={Routes.TODOS}
        component={TodosScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <List width={size} height={size} stroke={color} />
          ),
          tabBarLabel: 'Todos',
        }}
      />
      <BottomTabs.Screen
        name={Routes.STATS}
        component={StatsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BarChart2 width={size} height={size} stroke={color} />
          ),
          tabBarLabel: 'Stats',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeStack;
