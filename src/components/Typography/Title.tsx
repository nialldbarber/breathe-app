import React, { FC } from 'react';
import { Text } from 'react-native';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => (
  <>
    <Text>{text}</Text>
  </>
);

export default Title;
