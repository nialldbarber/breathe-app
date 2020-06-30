import { AnyStyles } from '@/styles/types';
import { colors } from '@/styles/utils/colors';

const boxShadow: AnyStyles = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 1,
  elevation: 5,
};

export { boxShadow };
