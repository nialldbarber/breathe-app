import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Home from '@/screens/Home/Home';
import Timer from '@/screens/Timer/Timer';
import AwakeScreen from '@/screens/Exercises/Awake';
import AlignedScreen from '@/screens/Exercises/Aligned/Aligned';
import AwareScreen from '@/screens/Exercises/Aware';
import AsleepScreen from '@/screens/Exercises/Asleep';
import Icon from '@/components/Icon/Icon';
import {
  noHeader,
  stackNavigatorOptions,
  tavNavigatorOptions,
} from '@/utils/home-page-utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen: FC = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ ...noHeader, headerShown: false }}
      />
      <Stack.Screen name="Awake" component={AwakeScreen} options={noHeader} />
      <Stack.Screen
        name="Aligned"
        component={AlignedScreen}
        options={noHeader}
      />
      <Stack.Screen name="Aware" component={AwareScreen} options={noHeader} />
      <Stack.Screen name="Asleep" component={AsleepScreen} options={noHeader} />
    </Stack.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tavNavigatorOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon type="HOME" size={wp('6%')} isFocused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon type="TIMER" size={wp('6%')} isFocused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
