import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors } from '@/styles/utils/colors';
import { AnyStyles } from '@/styles/types';

const title: AnyStyles = {
  flex: 1,
  left: wp('-25%'),
  color: colors.black,
  fontSize: hp('3%'),
  fontWeight: '700',
};

const subtitle: AnyStyles = {
  fontSize: wp('5%'),
  textAlign: 'center',
  fontWeight: '700',
  color: colors.black,
};

export { title, subtitle };
