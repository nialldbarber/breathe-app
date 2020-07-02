import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AnyStyles } from '@/styles/types';
import { colors } from '@/styles/utils/colors';
import { boxShadow } from '@/styles/utils/theme/mixins';

const buttonContainer: AnyStyles = {
  backgroundColor: colors.purple,
  borderRadius: 50,
  ...boxShadow,
};

const button: AnyStyles = {
  paddingVertical: 15,
  paddingHorizontal: 30,
  fontWeight: '700',
  textAlign: 'center',
  color: colors.white,
};

const exitContainer: AnyStyles = {
  position: 'absolute',
  marginBottom: 20,
  padding: 10,
  top: hp('6%'),
  right: wp('4%'),
  backgroundColor: colors.purple,
  borderRadius: 50,
  ...boxShadow,
};

const exit: AnyStyles = {
  width: 15,
  height: 15,
};

export { buttonContainer, button, exitContainer, exit };
