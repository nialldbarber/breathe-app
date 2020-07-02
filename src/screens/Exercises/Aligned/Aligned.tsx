import React, { FC } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
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
  const { visible, handleOpenModal, handleCloseModal } = useSetVisibility();

  return (
    <View style={styles.container}>
      <Exercise
        instruction={instructions}
        background={<Aligned width={wp('120%')} height={hp('80%')} />}
        {...{ handleOpenModal }}
      >
        <ModalContainer {...{ visible }} action={handleCloseModal}>
          <ScrollView>
            <View style={{ padding: 40 }}>
              <Text style={[styles.exercise, { opacity: visible ? 1 : 0 }]}>
                Hello
              </Text>
            </View>
          </ScrollView>
        </ModalContainer>
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
