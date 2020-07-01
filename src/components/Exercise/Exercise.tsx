import React, { FC, ReactChild, ReactNode } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ExerciseLayout from '@/components/Layout/Exercise';
import Instruction from '@/components/Exercise/Instruction';
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
    <ExerciseLayout>
      <>
        <View style={backgroundImage}>{background}</View>
        <View style={styles.title}>
          <Title text={instruction?.title ?? ''} addedStyles={subtitle} />
        </View>

        <View style={styles.instructions}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            data={instruction?.cycles}
            keyExtractor={(cycles) => cycles?.id.toString() ?? ''}
            renderItem={({ item }) => (
              <Instruction
                text={item.title}
                color={item.color}
                width={item.width}
                height={item.height}
              />
            )}
          />
        </View>

        <View style={styles.button}>
          <Button text="Begin Breathing!" />
        </View>
      </>
    </ExerciseLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    flex: 12,
  },
  button: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Exercise;
