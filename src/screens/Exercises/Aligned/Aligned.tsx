import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import useSetVisibility from '@/hooks/useSetVisibility';
import { instructions } from '@/screens/Exercises/Aligned/instructions';
import { AlignedScreenProps } from '@/screens/Exercises/Aligned/types';
import Exercise from '@/components/Exercise/Exercise';
import Aligned from '@/components/Icon/ExerciseIcons/Aligned';
import ModalContainer from '@/components/Modal/Modal';

const AlignedScreen: FC<AlignedScreenProps> = () => {
  const {
    visible: exerciseVisible,
    handleOpenModal: exerciseOpen,
    handleCloseModal: exerciseClose,
  } = useSetVisibility();

  const {
    visible: infoVisible,
    handleOpenModal: infoOpen,
    handleCloseModal: infoClose,
  } = useSetVisibility();

  return (
    <View style={styles.container}>
      <Exercise
        instruction={instructions}
        background={<Aligned width={wp('120%')} height={hp('80%')} />}
        action={exerciseOpen}
        info={infoOpen}
      >
        <>
          <ModalContainer visible={exerciseVisible} action={exerciseClose}>
            <Text>Exercise</Text>
          </ModalContainer>

          <ModalContainer visible={infoVisible} action={infoClose}>
            <Text>Info</Text>
          </ModalContainer>
        </>
      </Exercise>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exercise: {},
});

export default AlignedScreen;
