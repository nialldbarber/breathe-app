import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { boxShadow } from '@/styles/utils/theme/mixins';
import { colors } from '@/styles/utils/colors';

interface InstructionProps {
  text: string;
  color: string;
  width?: string | number;
  height?: string | number;
}

const Instruction: FC<InstructionProps> = ({
  text,
  color,
  width = wp('25%'),
  height = wp('25%'),
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.circle, { backgroundColor: color, width, height }]}
      />
      <Text style={styles.instructions}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...boxShadow,
    borderRadius: 50,
    marginBottom: 10,
    shadowOpacity: 0.1,
    shadowRadius: 0.8,
  },
  instructions: {
    fontWeight: '500',
    fontSize: wp('4%'),
    color: colors.black,
  },
});

export default Instruction;
