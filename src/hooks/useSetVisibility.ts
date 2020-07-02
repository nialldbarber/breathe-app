import { useState } from 'react';

const useSetVisibility = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return {
    visible,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useSetVisibility;
