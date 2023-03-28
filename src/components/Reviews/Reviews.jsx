import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchReviewsList';
import { ThreeCircles } from 'react-loader-spinner';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    const fetchReviewsData = async () => {
      setLoading(true);

      try {
        const response = await fetchReviews(movieId, abortController);
        setReviews(response);
      } catch (error) {
        setError(error);

        if (error?.message !== 'canceled') {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <>
      {error && error.message !== 'canceled' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}

      {loading && (
        <div
          style={{
            marginLeft: '420px',
            marginRight: 'auto',
            marginTop: '30px',
          }}
        >
          <ThreeCircles
            height="80"
            width="80"
            wrapperClass="spinner-wrapper"
            ariaLabel="three-circles-rotating"
            outerCircleColor="#0a598d"
            innerCircleColor="#260a8d"
            middleCircleColor="#6a0474"
          />
        </div>
      )}

      {reviews.length === 0 && !loading ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ReviewsList>
          <ReviewsItem reviews={reviews} />
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
