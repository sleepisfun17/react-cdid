import { useContext } from 'react';
import ColorContext from '../context/CommonContext';

const useColor = () => {
  return useContext(ColorContext);
};

export default useColor;
