import React, { FC } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { buttonContainer, button } from '@/styles/components/button';
import { colors } from '@/styles/utils/colors';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableHighlight
      style={[buttonContainer, styles.buttonContainer]}
      underlayColor={colors.purple}
    >
      <Text style={[button, styles.text]}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: wp('4%'),
  },
  buttonContainer: {
    marginBottom: hp('4%'),
    width: wp('50%'),
    alignSelf: 'center',
  },
});

export default Button;
