import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '@/styles/utils/colors';
import { AnyStyles } from '@/styles/types';

const title: AnyStyles = {
  flex: 1,
  left: wp('-28%'),
  color: colors.black,
  fontSize: hp('3%'),
  fontWeight: '700',
};

const subtitle: AnyStyles = {
  fontSize: wp('5%'),
  fontWeight: '700',
  color: colors.black,
  margin: 0,
};

export { title, subtitle };
