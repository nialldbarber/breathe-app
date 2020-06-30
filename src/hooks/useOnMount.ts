import { useEffect } from 'react';

type EffectCallback = () => void | (() => void);

const useOnMount = (onMount: EffectCallback) => {
  useEffect(onMount, []);
};

export default useOnMount;
