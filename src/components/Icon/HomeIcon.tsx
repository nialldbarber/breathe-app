import React, { FC } from 'react';
import SVG, { Path } from 'react-native-svg';
import { colors } from '@/styles/utils/colors';

interface HomeIconProps {
  size: number;
}

const HomeIcon: FC<HomeIconProps> = ({ size }) => (
  <SVG viewBox="0 0 212.86 218.49" height={size} width={size}>
    <Path
      d="M21.74 206.99c-3.12 0-5.67-2.55-5.67-5.67v-114c0-3.12 1.97-7.29 4.37-9.27l78.99-65.1c2.41-1.98 6.46-2.13 9-.33l83.3 59.01c2.54 1.8 4.63 5.83 4.63 8.95v120.75c0 3.12-2.55 5.67-5.67 5.67H21.74z"
      fill="none"
      stroke={colors.black}
      strokeWidth="20"
    />
    <Path
      d="M76.57 205.97v-87.79c0-3.12 2.55-5.67 5.67-5.67h47.23c3.12 0 5.67 2.55 5.67 5.67v87.79"
      fill="none"
      stroke={colors.black}
      strokeWidth="20"
    />
  </SVG>
);

export default HomeIcon;
