import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { instructions } from '@/screens/Exercises/Aligned/instructions';
import { AlignedScreenProps } from '@/screens/Exercises/Aligned/types';
import Exercise from '@/components/Exercise/Exercise';
import Aligned from '@/components/Icon/ExerciseIcons/Aligned';

const AlignedScreen: FC<AlignedScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Exercise
        instruction={instructions}
        background={<Aligned width={wp('120%')} height={hp('80%')} />}
      >
        <Text>Exercise (to be hidden)</Text>
      </Exercise>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlignedScreen;
