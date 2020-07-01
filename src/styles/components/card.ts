import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { AnyStyles } from '@/styles/types';
import { colors } from '@/styles/utils/colors';

const text: AnyStyles = {
  position: 'absolute',
  color: colors.white,
  fontWeight: '700',
  fontSize: wp('5%'),
  left: wp('-15%'),
  alignSelf: 'center',
};

const button: AnyStyles = {
  flex: 3,
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  borderRadius: 10,
  backgroundColor: 'rgba(193, 189, 209, .7)',
  marginVertical: 10,
  overflow: 'hidden',
};

const buttonContainer: AnyStyles = {
  position: 'relative',
  flex: 1,
  flexDirection: 'row',
};

export { text, button, buttonContainer };
