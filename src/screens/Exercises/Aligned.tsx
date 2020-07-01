import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Exercise from '@/components/Exercise/Exercise';

interface AlignedScreenProps {}

const AlignedScreen = () => {
  return (
    <View style={styles.container}>
      <Exercise text="Aligned Page">
        <Text>I am the content!</Text>
      </Exercise>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlignedScreen;
