import { Button } from './Button';
import { Image } from './Image';
import { Description } from './Description';
import './Card.scss';

export const Card = () => {
  return (
    <div className="Card">
      <article className="Card-article">
        <Image />
        <section className="Card-section">
          <Description />
          <Button />
        </section>
      </article>
    </div>
  );
};
