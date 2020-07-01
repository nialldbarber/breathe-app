import React, { ReactChild, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/styles/utils/colors';

interface ExerciseLayoutProps {
  children: ReactChild;
}

const ExerciseLayout: FC<ExerciseLayoutProps> = ({ children }) => {
  return (
    <View style={styles.exercise}>
      <>{children}</>
    </View>
  );
};

const styles = StyleSheet.create({
  exercise: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ExerciseLayout;
