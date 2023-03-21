import { useContext } from 'react';
import { GlobalContext } from './../../provider/Provider';

export const Card = () => {
  const { product } = useContext(GlobalContext);

  return <h1>Hi</h1>;
};
