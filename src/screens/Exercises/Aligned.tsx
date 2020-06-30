import React from 'react';
import { View, Text } from 'react-native';
import Exercise from '@/components/Exercise/Exercise';

interface AlignedScreenProps {}

const AlignedScreen = () => {
  return (
    <View>
      <Exercise text="Aligned Page">
        <Text>I am the content!</Text>
      </Exercise>
    </View>
  );
};

export default AlignedScreen;
