import { useContext } from 'react';
import { GlobalContext } from '../../provider/Provider';

export const Description = () => {
  const { product } = useContext(GlobalContext);
  const { title, brand, text, currentPrice, previousPrice } = product;
  return (
    <>
      <h1 className="Card-h1">{title}</h1>
      <h2 className="Card-h2">{brand}</h2>
      <p className="Card-p">{text}</p>
      <div className="Card-prices">
        <p className="Card-currentPrice">{currentPrice}</p>
        <p className="Card-previousPrice">{previousPrice}</p>
      </div>
    </>
  );
};
