import { useContext } from 'react';
import TitleContext from '../context/CommonContext';

const useTitle = () => {
  return useContext(TitleContext);
};

export default useTitle;
