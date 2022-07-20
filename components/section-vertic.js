import ImageNextJS from './image-next';

const SectionVertic = ({ content }) => {
  return (
    <div className="container-md">

      <h2 className="text-center">
        {content.title}
      </h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center gx-4 gx-xl-6 px-2 px-lg-3 px-xxl-6 mt-4 mt-lg-5">

        {content.contentBlocks?.map((block) => {
          return (
            <div key={block.id} className="col">
              
              <div className="w-100 text-center">
                <ImageNextJS 
                  image={block.image} 
                  layout="intrinsic"
                  priority={false}
                  // Set sizes only when using layout "responsive" and "fill".
                  sizes={null}
                />
              </div>

              <div className="mt-3 mb-5 mt-lg-4">
                <h3 className="h5 fw-bold text-center mb-3">
                  {block.subtitle}
                </h3>

                {block.paragraphs.length > 0 && (
                  <div>
                    {block.paragraphs.map((paragr) => {
                      return (
                        <p key={`para__${block.paragraphs.indexOf(paragr)}`}>
                          {paragr}
                        </p>
                      );
                    })}
                  </div>
                )}

                {block.list && (
                  <>
                  {block.list.title && (
                    <h4>
                      {block.list.title}
                    </h4>
                  )}
                    
                  {block.list.items &&(
                    <ul className="square-bullets">
                      {block.list.items.map((item) => {
                        return (
                          <li key={item.id}>
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
          );
        })}
      </div>
    </div>
  );
}

export default SectionVertic;