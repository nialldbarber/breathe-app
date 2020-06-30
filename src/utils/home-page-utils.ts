import { colors } from '@/styles/utils/colors';
import { theme } from '@/styles/utils/theme/variables';

const noHeader = { headerBackTitleVisible: false };

const stackNavigatorOptions = {
  gestureEnabled: true,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: colors.black,
};

const tavNavigatorOptions = {
  showLabel: false,
  style: {
    height: theme.bottomBarHeight,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
};

export { noHeader, stackNavigatorOptions, tavNavigatorOptions };
