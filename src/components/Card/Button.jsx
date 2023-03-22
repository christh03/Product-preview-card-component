import { useContext } from 'react';
import { GlobalContext } from '../../provider/Provider';

export const Button = () => {
  const { btn } = useContext(GlobalContext);
  const { text } = btn;
  return (
    <>
      <button className="Card-btn">
        <img
          className="Card-svg"
          src="assets/images/card.svg"
          alt="Shopping card"
        />
        {text}
      </button>
    </>
  );
};
