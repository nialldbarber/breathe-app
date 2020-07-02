import React, { FC } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { exitContainer, exit } from '@/styles/components/button';
import { colors } from '@/styles/utils/colors';

interface CloseButtonProps {
  text?: string;
  addedStyles?: {
    [key: string]: any;
  };
  action?: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ action }) => {
  return (
    <TouchableHighlight
      style={exitContainer}
      underlayColor={colors.purple}
      onPress={action}
    >
      <Image style={exit} source={require('assets/exit.png')} />
    </TouchableHighlight>
  );
};

export default CloseButton;
