import React, { FC } from 'react';
import SVG, { Path, Circle, G } from 'react-native-svg';
import { colors } from '@/styles/utils/colors';
import { StyleProp, ViewStyle } from 'react-native';

interface TimerIconProps {
  size: number;
}

const background = 'enable-background:new 0 0 212.86 218.49;';

const TimerIcon: FC<TimerIconProps> = ({ size }) => (
  <SVG
    x="0px"
    y="0px"
    viewBox="0 0 212.86 218.49"
    style={background as StyleProp<ViewStyle>}
    height={size}
    width={size}
  >
    <G>
      <Circle
        cx="106.15"
        cy="111.04"
        r="92.7"
        fill="none"
        stroke={colors.black}
        strokeWidth="20"
        strokeMiterlimit="10"
      />
      <G>
        <Path
          d="M106.15,51.85v62.51c0,3.12,2.26,6.86,5.02,8.3l37.4,19.63"
          fill="none"
          stroke={colors.black}
          strokeWidth="20"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </G>
    </G>
    <G>
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
    </G>
  </SVG>
);

export default TimerIcon;
