import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, getReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const reviews = await getMovieReviews(Number(movieId));
      getReviews(reviews);
    })();
  }, [movieId]);
  return reviews.length > 1 ? (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <span>We don't have any reviews for this movie</span>
  );
};
export default Reviews;
