import { createContext, useState } from 'react';

const TitleContext = createContext();
const ColorContext = createContext();

export const CommonProvider = ({ children }) => {
  // const [title, setTitle] = useState();
  const [color, setColor] = useState();

  return (
    // <TitleContext.Provider value={{ title, setTitle }}>
    <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
    // </TitleContext.Provider>
  );
};

export default (ColorContext, TitleContext);
