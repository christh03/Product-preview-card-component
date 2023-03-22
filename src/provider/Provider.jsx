import { v4 as uuidv4 } from 'uuid';
import { createContext } from 'react';

const data = {
  product: {
    id: uuidv4(),
    title: 'PERFUME',
    brand: 'Gabrielle Essence Eau De Parfum',
    text: 'A floral, solar and voluptuous  interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    currentPrice: '$149.99',
    previousPrice: '$169.99',
  },

  btn: {
    text: 'Add to Cart',
  },
};
export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
