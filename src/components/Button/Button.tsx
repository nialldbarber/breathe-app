import React, { FC, ReactChild } from 'react';
import DefaultButton from '@/components/Button/Default';
import CloseButton from '@/components/Button/Close';
import InfoButton from '@/components/Button/Info';

interface ButtonProps {
  type: string;
  text?: string;
  addedStyles?: {
    [key: string]: any;
  };
  action?: () => void;
}

const Button: FC<ButtonProps> = ({ type, text, addedStyles, action }) => {
  let buttonType: ReactChild;

  switch (type) {
    case 'primary':
      buttonType = (
        <DefaultButton {...{ text }} {...{ action }} {...{ addedStyles }} />
      );
      break;
    case 'close':
      buttonType = <CloseButton {...{ action }} />;
      break;
    case 'info':
      buttonType = <InfoButton {...{ action }} />;
      break;
    default:
      return null;
  }

  return buttonType;
};

export default Button;
