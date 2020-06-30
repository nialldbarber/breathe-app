import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '@/components/Card/Card';
import Awake from '@/components/Icon/ExerciseIcons/Awake';
import Aligned from '@/components/Icon/ExerciseIcons/Aligned';
import Aware from '@/components/Icon/ExerciseIcons/Aware';
import Asleep from '@/components/Icon/ExerciseIcons/Asleep';
import { title } from '@/styles/utils/typography';
import { colors } from '@/styles/utils/colors';

const Home = ({ navigation: { navigate } }) => {
  console.log(navigate);
  return (
    <View style={styles.container}>
      <Text style={title}>Exercises</Text>
      <Card name="Awake" navigate={navigate}>
        <Awake home={false} />
      </Card>
      <Card name="Aligned" navigate={navigate}>
        <Aligned home={false} />
      </Card>
      <Card name="Aware" navigate={navigate}>
        <Aware home={false} />
      </Card>
      <Card name="Asleep" navigate={navigate}>
        <Asleep home={false} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    paddingBottom: 30,
  },
});

export default Home;
