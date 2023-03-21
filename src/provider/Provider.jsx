import { v4 as uuidv4 } from 'uuid';
import { createContext } from 'react';

const data = {
  product: {
    id: uuidv4(),
    title: 'PERFUME',
    brand: 'Gabrielle Essence Eau De Parfum',
    text: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    price: '$149.99',
    previousPrice: '$149.99',
    desktopImg: '../assets/images/image-product-desktop.jpg',
    mobileImg: '../assets/images/image-product-mobile.jpg',
  },

  btn: {
    text: 'Add to Cart',
    src: '../assets/images/icon-cart.svg',
  },
};
export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
