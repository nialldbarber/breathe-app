import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AnyStyles } from '@/styles/types';

const backgroundImage: AnyStyles = {
  position: 'absolute',
  top: hp('12%'),
  left: wp('-10%'),
  opacity: 0.6,
};

export { backgroundImage };
