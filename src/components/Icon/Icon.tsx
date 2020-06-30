import React, { FC } from 'react';
import { View } from 'react-native';
import { HOME, TIMER } from '@/constants/icons';
import HomeIcon from '@/components/Icon/HomeIcon';
import TimerIcon from '@/components/Icon/TimerIcon';

interface Props {
  type: string;
  size: number;
  isFocused: boolean;
}

const Icon: FC<Props> = ({ type, size, isFocused }) => {
  const getIconType = () => {
    switch (type) {
      case HOME:
        return <HomeIcon size={size} />;
      case TIMER:
        return <TimerIcon size={size} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ top: 12, opacity: isFocused ? 1 : 0.35 }}>
      {getIconType()}
    </View>
  );
};

export default Icon;
