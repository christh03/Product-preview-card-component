export const Image = () => {
  return (
    <>
      <figure className="Card-figure">
        <picture className="Card-picture">
          <source
            srcSet=" /assets/images/image-product-desktop.jpg"
            media="(min-width:39.4375rem)"
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
