import React, { ReactChild, FC } from 'react';
import { Modal, ScrollView, View } from 'react-native';
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
      <Button type="close" action={action} />
      <ScrollView>
        <View style={{ padding: 40 }}>
          <>{children}</>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ModalContainer;
