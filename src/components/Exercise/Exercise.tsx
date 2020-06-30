import React, { FC, ReactChild } from 'react';
import { View } from 'react-native';
import Button from '@/components/Button/Button';
import Title from '@/components/Typography/Title';

interface ExerciseProps {
  children: ReactChild;
  text: string;
}

const Exercise: FC<ExerciseProps> = ({ text, children }) => {
  return (
    <View>
      <Title text={text} />
      {children}
      <Button text="Begin Breathing!" />
    </View>
    // <Modal
    //   description={<Description data={data} />}
    //   image={<AlingedImage home={false} styleType={backgroundImage} width={wp('200%')} height={hp('80%')} />}
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

export default Exercise;
