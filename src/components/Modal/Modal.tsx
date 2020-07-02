import React, { ReactChild, FC } from 'react';
import { Modal } from 'react-native';
import Button from '@/components/Button/Button';

interface ModalContainerProps {
  visible: boolean;
  action: () => void;
  children: ReactChild;
}

const ModalContainer: FC<ModalContainerProps> = ({
  visible,
  action,
  children,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <Button iconClose action={action} />
      {children}
    </Modal>
  );
};

export default ModalContainer;
