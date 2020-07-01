import React, { FC } from 'react';
import { Text } from 'react-native';
import Card from '@/components/Card/Card';
import Awake from '@/components/Icon/ExerciseIcons/Awake';
import Aligned from '@/components/Icon/ExerciseIcons/Aligned';
import Aware from '@/components/Icon/ExerciseIcons/Aware';
import Asleep from '@/components/Icon/ExerciseIcons/Asleep';
import HomeLayout from '@/components/Layout/Home';
import { title } from '@/styles/utils/typography';

const Home = ({ navigation: { navigate } }) => {
  return (
    <HomeLayout>
      <>
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
      </>
    </HomeLayout>
  );
};

export default Home;
