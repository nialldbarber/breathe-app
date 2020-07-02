import React, { ReactChild, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/styles/utils/colors';

interface HomeLayout {
  children: ReactChild;
}

const HomeLayout: FC<HomeLayout> = ({ children }) => {
  return (
    <View style={styles.container}>
      <>{children}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default HomeLayout;
