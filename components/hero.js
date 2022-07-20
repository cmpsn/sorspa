import ImageNextJS from './image-next';

import CountDownTimer from './countdown-timer';
import Slider from './slider';

const HeroSlides = ({ images }) => {
  return (
    <>
      {images.length > 1 ? (

        <Slider time={4000}>
          {images.map((image) => {
            return (
              <div key={image.id} className="d-block w-100">
                <ImageNextJS 
                  image={image}
                  layout="responsive"
                  priority={false}
                  sizes={'100vw'}
                  imageCSS={null}
                />
              </div>
            );
          })}
        </Slider>
        
      ) : (

        <ImageNextJS 
          image={images[0]} 
          layout="responsive"
          priority={false}
          sizes={'100vw'}
          imageCSS={null}
        />
        
      )}

    </>
  );
}

const Hero = ({ hero }) => {
  const isHeroImage = hero.images?.length > 0;
  const isShippingLabel = Object.keys(hero.shippingLabel).length > 0;
  const isSalesLabel = Object.keys(hero.salesLabel).length > 0;
  const isSatisfactionLabel = Object.keys(hero.satisfactionLabel).length > 0;

  return (
    <div className="custom-hero">
      <div className="row gx-0">

        <div className="col-lg-4 col-xxxl-6">

          <div className="row gx-0">

            {isHeroImage && (
              <div className="col-md-8 col-lg-12 col-xxxl-8">
                <HeroSlides images={hero.images} />
              </div>
            )}

            <div className={`${isHeroImage ? "col-md-4 col-lg-12 col-xxxl-4" : "col-auto"} text-center text-xxxl-start`}>
              <div className="row g-0 mt-3 ms-xxxl-3">

              {isSalesLabel && (
                <div className="col-4 offset-1 col-md-12 offset-md-0 col-lg-5 offset-lg-1 col-xxxl-12 offset-xxxl-0">
                  <ImageNextJS 
                    image={hero.salesLabel} 
                    layout="intrinsic"
                    priority={false}
                    sizes={null}
                    imageCSS={null}
                  />
                </div>
              )}

              {isShippingLabel && (
                <div className="col-4 offset-2 col-md-12 offset-md-0 col-lg-5 offset-lg-1 col-xxxl-12 offset-xxxl-0">
                  <ImageNextJS 
                    image={hero.shippingLabel} 
                    layout="intrinsic"
                    priority={false}
                    sizes={null}
                    imageCSS={null}
                  />
                </div>
              )}


              {isSatisfactionLabel && (
                <div className="col-4 offset-1 col-md-12 offset-md-0 col-lg-5 offset-lg-1 col-xxxl-12 offset-xxxl-0">
                  <ImageNextJS 
                    image={hero.satisfactionLabel} 
                    layout="intrinsic"
                    priority={false}
                    sizes={null}
                    imageCSS={null}
                  />
                </div>
              )}

              </div>
            </div>
          </div>
        </div>

        <div className={`${isHeroImage ? "col-lg-8 col-xxxl-6" : "col-auto"} text-center px-3 px-md-5`}>
          
          <h1 className="fw-bold text-secondary pt-4 pb-2 pt-md-5 pb-md-3">
            {hero.title}
          </h1>

          {hero.slogans?.map((slogan) => {
            return (
              <p 
                key={`slogan__${hero.slogans.indexOf(slogan)}`} 
                className="h3 fw-bold text-primary pb-3 pb-md-2"
              >
                {slogan}
              </p>
            );
          })}
          
          <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 col-kl-6 offset-kl-3">
              
              <div className="card text-center shadow">

                <div className="card-header">
                  <h2 className="h3 pt-2 fw-bold">
                    {hero.textPrice.title}
                  </h2>

                  {hero.textPrice.paragraphs.map(paragr => {
                    return (
                      <p 
                        key={`par__${hero.textPrice.paragraphs.indexOf(paragr)}`}
                        className="fw-bold lh-sm text-primary"
                      >
                        {paragr}
                      </p>
                    );
                  })}

                  <div className="fs-4 fw-bold">

                    <div>
                      <span>Preț vechi: </span>
                      <span className="text-danger text-decoration-line-through">
                      {`${hero.prices.oldPrice} LEI`}
                      </span>
                    </div>

                    <div>
                      <span>Preț nou: </span>
                      <span className="text-green">
                      {`${hero.prices.newPrice} LEI`}
                      </span>
                    </div>

                  </div>
                </div>

                <div className="card-body">

                  <div className="fs-5">
                    {hero.textTimer}
                  </div>

                  <CountDownTimer />

                </div>

              </div>
            </div>
          </div>
          </div>

        </div>

      </div>      
    </div>
  );
}

export default Hero;
