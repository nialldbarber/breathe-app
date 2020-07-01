import React, { FC, ReactChild, ReactNode } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Button from '@/components/Button/Button';
import Title from '@/components/Typography/Title';
import { subtitle } from '@/styles/utils/typography';
import { Instructions } from '@/screens/Exercises/Aligned/types';
import { backgroundImage } from '@/styles/utils/layout/icons';

interface ExerciseProps {
  instruction?: Instructions;
  background?: ReactNode;
  children?: ReactChild;
}

const Exercise: FC<ExerciseProps> = ({ instruction, background, children }) => {
  return (
    <View style={styles.exercise}>
      <View style={backgroundImage}>{background}</View>
      <View style={styles.title}>
        <Title text={instruction?.title ?? ''} addedStyles={subtitle} />
      </View>

      <View style={styles.instructions}>
        <FlatList
          data={instruction?.cycles}
          keyExtractor={(cycles) => cycles?.id.toString() ?? ''}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>

      <View style={styles.button}>
        <Button text="Begin Breathing!" />
      </View>
    </View>
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
