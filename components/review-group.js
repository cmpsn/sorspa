import ReviewCard from './review-card';

const ReviewGroup = ({ reviews }) => {

  return (
    <div className="container-md">

      <h2 className="text-primary text-center mb-3 mb-xl-4">
        {reviews.title}
      </h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 row-cols-kl-6 g-4 g-xl-5 justify-content-center mx-sm-2 mx-lg-3 mx-xl-4">
        
        {reviews.contentBlocks.map((review, i) => {
          return (
            <div 
              key={`review__${review.id}`}  
              className="col"
            >
              <ReviewCard 
                review={review} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewGroup;