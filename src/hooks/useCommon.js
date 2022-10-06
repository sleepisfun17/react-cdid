import { useContext } from 'react';
import CommonContext from '../context/CommonContext';

const useCommon = () => {
  return useContext(CommonContext);
};

export default useCommon;
