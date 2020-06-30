import React, { FC, ReactChild } from 'react';
import { View } from 'react-native';
import Title from '@/components/Typography/Title';

interface ExerciseProps {
  children: ReactChild;
  text: string;
}

const Exercise: FC<ExerciseProps> = ({ children, text }) => {
  return (
    <View>
      <Title text={text} />
      {children}
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
