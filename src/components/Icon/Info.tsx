import React, { FC } from 'react';
import SVG, { Path } from 'react-native-svg';
import { colors } from '@/styles/utils/colors';

interface InfoIconProps {
  width?: number;
  height?: number;
}

const InfoIcon: FC<InfoIconProps> = ({ width = 28, height = 28 }) => {
  return (
    <SVG fill={colors.black} viewBox="0 0 32 32" width={width} height={height}>
      <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z" />
    </SVG>
  );
};

export default InfoIcon;
