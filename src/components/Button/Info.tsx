import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import InfoIcon from '@/components/Icon/Info';
import { infoContainer } from '@/styles/components/button';
import { colors } from '@/styles/utils/colors';

interface InfoButtonProps {
  action?: () => void;
}

const InfoButton: FC<InfoButtonProps> = ({ action }) => {
  return (
    <TouchableOpacity style={infoContainer} onPress={action}>
      <InfoIcon />
    </TouchableOpacity>
  );
};

export default InfoButton;
