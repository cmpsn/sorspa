import ImageNextJS from './image-next';

const SectionHorizon = ({ content }) => {
  return (
    <>
      <h2 className="h1 text-primary text-center fw-bold mx-3 mx-sm-6 mb-xxxl-4">
        {content.title}
      </h2>

      {content.contentBlocks?.map((block) => {
        return (
          <div key={block.id} className="row gx-0 align-items-center mb-md-3 mb-xxl-5">
            
            <div className={`col-lg-5 ${+(content.contentBlocks.indexOf(block) % 2) !== 0 ? "order-lg-last" : "offset-lg-1"}`}>
              <div className="container px-4 px-md-6 px-lg-4 px-xxxl-6 pt-4 pt-lg-3">
                <h3 className="text-secondary text-center mb-3 mb-lg-4">
                  {block.subtitle}
                </h3>

                {block.paragraphs.length > 0  && (
                  <div>
                    {block.paragraphs.map((paragr) => {
                      return (
                        <p key={`par__${block.paragraphs.indexOf(paragr)}`}>
                          {paragr}
                        </p>
                      );
                    })}
                  </div>
                )}

                {block.list && (
                  <>
                    {block.list.title && (
                      <h4 className="pt-1 fw-bold">
                        {block.list.title}
                      </h4>
                    )}
                    
                    {block.list.items && (
                      <ul className="square-bullets">
                        {block.list.items.map((item) => {
                          return (
                            <li key={item.id} className="py-1">
                              {item.text}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              {/*<div className={`w-100 ${+(content.contentBlocks.indexOf(block) % 2) !== 0 ? "text-start" : "text-end"}`}>*/}
              <div className="w-100">
                <ImageNextJS 
                  image={block.image} 
                  layout="intrinsic"
                  priority={false}
                  // Set sizes only when using layout "responsive" and "fill".
                  sizes={null}
                  imageCSS={null}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SectionHorizon;