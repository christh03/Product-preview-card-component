import { useContext } from 'react';
import { GlobalContext } from '../../provider/Provider';
import './Card.scss';

export const Card = () => {
  return (
    <div className="Card">
      <article className="Card-article">
        <Image />
        <section className="Card-section">
          <Description />
          <Bottom />
        </section>
      </article>
    </div>
  );
};

const Description = () => {
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

const Bottom = () => {
  const { btn } = useContext(GlobalContext);
  const { text } = btn;

  return (
    <>
      <button className="Card-btn">
        <img
          className="Card-svg"
          src="/public/assets/images/card.svg"
          alt="Shopping card"
        />
        {text}
      </button>
    </>
  );
};

const Image = () => {
  return (
    <>
      <figure className="Card-figure">
        <picture className="Card-picture">
          <source
            srcSet=" /assets/images/image-product-desktop.jpg"
            media="(min-width:39.875rem)"
          />
          <img
            src="/assets/images/image-product-mobile.jpg"
            alt="image-product-mobile.jpg"
          />
        </picture>
      </figure>
    </>
  );
};
