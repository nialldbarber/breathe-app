import React, { FC } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '@/styles/utils/colors';

interface CardProps {
  name: string;
  navigate: () => string;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ name, navigate, children }) => {
  return (
    <TouchableHighlight
      onPress={() => navigate(name)}
      style={styles.button}
      underlayColor={colors.purple}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{name}</Text>
        {children}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    color: colors.white,
    fontWeight: '700',
    fontSize: hp('2.2%'),
    left: wp('-15%'),
    alignSelf: 'center',
  },
  button: {
    flex: 3,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.purple,
    marginVertical: 10,
    overflow: 'hidden',
  },
  buttonContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
  },
});

export default Card;
