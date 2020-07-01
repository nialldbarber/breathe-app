import React, { FC } from 'react';
import { Text } from 'react-native';

interface TitleProps {
  text: string;
  addedStyles?: {
    [key: string]: any;
  };
}

const Title: FC<TitleProps> = ({ text, addedStyles }) => (
  <>
    <Text style={addedStyles}>{text}</Text>
  </>
);

export default Title;
