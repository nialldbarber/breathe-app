import React, { FC, ReactChild, ReactNode } from 'react';
import { View, FlatList } from 'react-native';
import ExerciseLayout from '@/components/Layout/Exercise';
import Instruction from '@/components/Exercise/Instruction';
import Button from '@/components/Button/Button';
import Title from '@/components/Typography/Title';
import { subtitle } from '@/styles/utils/typography';
import { Instructions } from '@/screens/Exercises/Aligned/types';
import { backgroundImage } from '@/styles/utils/layout/icons';
import {
  title,
  infoButton,
  instructions,
  button,
  list,
} from '@/styles/components/exercise';

interface ExerciseProps {
  instruction?: Instructions;
  background?: ReactNode;
  action?: () => void;
  info?: () => void;
  children?: ReactChild;
}

const Exercise: FC<ExerciseProps> = ({
  instruction,
  background,
  action,
  info,
  children,
}) => {
  return (
    <ExerciseLayout>
      <>
        <View style={backgroundImage}>{background}</View>

        <View style={title}>
          <Title text={instruction?.title ?? ''} addedStyles={subtitle} />
          <View style={infoButton}>
            <Button type="info" action={info} />
          </View>
        </View>

        <View style={instructions}>
          <FlatList
            contentContainerStyle={list}
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

        {children}

        <View style={button}>
          <Button type="primary" text="Begin Breathing!" {...{ action }} />
        </View>
      </>
    </ExerciseLayout>
  );
};

export default Exercise;
