import { AnyStyles } from '@/styles/types';

const title: AnyStyles = {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
};

const infoButton: AnyStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 4,
  opacity: 0.7,
};

const instructions: AnyStyles = {
  flex: 12,
};

const button: AnyStyles = {
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
};

const list: AnyStyles = {
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
};

export { title, infoButton, instructions, button, list };
