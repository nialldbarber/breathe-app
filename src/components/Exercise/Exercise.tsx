import React, { FC, ReactChild } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@/components/Button/Button';
import Title from '@/components/Typography/Title';
import { subtitle } from '@/styles/utils/typography';

interface ExerciseProps {
  children: ReactChild;
  text: string;
}

const Exercise: FC<ExerciseProps> = ({ text, children }) => {
  return (
    <View style={styles.exercise}>
      <View style={styles.title}>
        <Title text={text} addedStyles={subtitle} />
      </View>

      <View style={styles.instructions}>{children}</View>

      <View style={styles.button}>
        <Button text="Begin Breathing!" />
      </View>
    </View>
    // <Modal
    //   description={<Description data={data} />}
    //   image={<AlingedImage home={false} addedStyles={backgroundImage} width={wp('200%')} height={hp('80%')} />}
    // >
    //   <Text>Stoooof goes here!</Text>
    // </Modal>
  );
};

// Container component
// needs
// --- background image

// --- ---  description </
// --- ---  instructions <>
// --- ---  button </

const styles = StyleSheet.create({
  exercise: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    flex: 12,
    borderWidth: 1,
    borderColor: 'dodgerblue',
  },
  button: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default Exercise;
