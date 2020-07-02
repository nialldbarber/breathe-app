import React, { FC } from 'react';
import { TouchableHighlight, StyleSheet, Text, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  buttonContainer,
  button,
  exitContainer,
  exit,
} from '@/styles/components/button';
import { colors } from '@/styles/utils/colors';

interface ButtonProps {
  text?: string;
  iconClose?: boolean;
  addedStyles?: {
    [key: string]: any;
  };
  action?: () => void;
}

const Button: FC<ButtonProps> = ({ text, iconClose, addedStyles, action }) => {
  return (
    <TouchableHighlight
      style={
        iconClose
          ? exitContainer
          : [buttonContainer, styles.buttonContainer, addedStyles]
      }
      underlayColor={colors.purple}
      onPress={action}
    >
      {iconClose ? (
        <Image style={exit} source={require('assets/exit.png')} />
      ) : (
        <Text style={[button, styles.text]}>{text}</Text>
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: wp('4%'),
  },
  buttonContainer: {
    width: wp('50%'),
  },
});

export default Button;
