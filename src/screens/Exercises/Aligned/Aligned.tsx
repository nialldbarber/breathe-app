import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { instructions } from '@/screens/Exercises/Aligned/instructions';
import { AlignedScreenProps } from '@/screens/Exercises/Aligned/types';
import Exercise from '@/components/Exercise/Exercise';
import Aligned from '@/components/Icon/ExerciseIcons/Aligned';
import ModalContainer from '@/components/Modal/Modal';

const AlignedScreen: FC<AlignedScreenProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => setVisible(true);

  return (
    <View style={styles.container}>
      <Exercise
        instruction={instructions}
        background={<Aligned width={wp('120%')} height={hp('80%')} />}
        {...{ handleOpenModal }}
      >
        <ModalContainer {...{ visible }} action={() => setVisible(false)}>
          <Text style={[styles.exercise, { opacity: visible ? 1 : 0 }]}>
            Exercise (to be hidden)
          </Text>
        </ModalContainer>
      </Exercise>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exercise: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
});

export default AlignedScreen;
