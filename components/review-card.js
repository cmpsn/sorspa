import ImageNextJs from "./image-next";

const ReviewCard = ({ review }) => {
  return (
    <div className="card shadow">
      {/* Wrap image with a div -> to configure width when image is inside a flex container, as bootstrap card is.*/}
      <div className="w-100">
        <ImageNextJs 
          image={review.image}
          layout="responsive"
          priority={false}
          sizes={null}
        />
      </div>

      <div className="card-body">
        <p className="card-text fs-6 custom-quotes">
          {review.paragra}
        </p>

        <p className="card-title text-primary fw-bold">
          <span>{review.nume}</span>
          <span>{' - '}</span>
          <span>{review.varsta}</span>
        </p>
      </div>

    </div>
  );
}

export default ReviewCard;