import React, { FC, ReactNode } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { text, button, buttonContainer } from '@/styles/components/card';
import { colors } from '@/styles/utils/colors';

interface CardProps {
  name: string;
  navigate: () => string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ name, navigate, children }) => {
  return (
    <TouchableHighlight
      onPress={() => navigate(name)}
      style={button}
      underlayColor={colors.purple}
    >
      <View style={buttonContainer}>
        <Text style={text}>{name}</Text>
        {children}
      </View>
    </TouchableHighlight>
  );
};

export default Card;
