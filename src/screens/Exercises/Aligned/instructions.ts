import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Instructions } from '@/screens/Exercises/Aligned/types';
import { colors } from '@/styles/utils/colors';

const instructions: Instructions = {
  title: 'Release stress & anxiety',
  cycles: [
    {
      id: 1,
      title: 'Inhale',
      content: 'Inhale',
      color: colors.green,
      width: wp('20%'),
      height: wp('20%'),
    },
    {
      id: 2,
      title: 'Hold',
      content: 'Hold',
      color: colors.pink,
      width: wp('20%'),
      height: wp('20%'),
    },
    {
      id: 3,
      title: 'Exhale',
      content: 'Exhale',
      color: colors.blue,
      width: wp('20%'),
      height: wp('20%'),
    },
    {
      id: 4,
      title: 'Hold',
      content: 'Hold',
      color: colors.pink,
      width: wp('20%'),
      height: wp('20%'),
    },
  ],
};

export { instructions };
