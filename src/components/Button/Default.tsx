import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { buttonContainer, button } from '@/styles/components/button';
import { colors } from '@/styles/utils/colors';

interface DefaultButtonProps {
  text?: string;
  addedStyles?: {
    [key: string]: any;
  };
  action?: () => void;
}

const DefaultButton: FC<DefaultButtonProps> = ({
  text,
  action,
  addedStyles,
}) => {
  return (
    <TouchableHighlight
      style={[buttonContainer, styles.buttonContainer, addedStyles]}
      underlayColor={colors.purple}
      onPress={action}
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
    width: wp('50%'),
  },
});

export default DefaultButton;
