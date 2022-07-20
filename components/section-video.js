import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import the 'react-lite-youtube-embed' plugin's CSS
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const SectionVideo = ({content}) => {
  return (
    <div className="container-lg">

      <h2 className="h1 text-secondary text-center fw-bold mx-sm-6 mb-4 mb-xxxl-5">
        {content.title}
      </h2>

      <div className="row align-items-center">

        <div className="col-lg-6">
          <div className="container px-4 px-md-6 px-lg-4 px-xxxl-6 pb-2 pb-sm-0">
            {content.paragraphs.length > 0  && (
              <div>
                {content.paragraphs.map((paragr) => {
                  return (
                    <p key={`par__${content.paragraphs.indexOf(paragr)}`}>
                      {paragr}
                    </p>
                  );
                })}
              </div>
            )}

            {content.list && (
              <>
                {content.list.title && (
                  <h4 className="pt-1 fw-bold">
                    {content.list.title}
                  </h4>
                )}
                
                {content.list.items && (
                  <ul className="no-bullets fs-4">
                    {content.list.items.map((item) => {
                      return (
                        <li key={item.id} className="py-1">
                          <span>
                            <svg  
                              width="30"
                              height="30"
                              className="text-green"
                              fill="currentColor"
                              aria-hidden="true"
                              focusable="false"
                              xmlns="https://www.w3.org/2000/svg"
                              viewBox="0 0 18 18"
                            >
                              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                            </svg>
                          </span>
                          
                          <span>{` ${item.text}`}</span>
                          
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>

        <div className="col-lg-6 px-sm-6 px-lg-0">
          <LiteYouTubeEmbed 
            id={content.video.videoEmbedId}
            title={content.video.videoTitle}
            aspectWidth={content.video.aspectWidth}
            aspectHeight={content.video.aspectHeight}
            cookie={false}
            announce={"Vezi"}
          />
        </div>

      </div>
      
    </div>
  );
}

export default SectionVideo;