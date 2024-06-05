import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filterSeason, setFilterSeason] = useState('');
  const [filterEpisode, setFilterEpisode] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://bigbang-backend-5.onrender.com/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const filteredReviews = reviews
    .filter(review => {
      const seasonMatch = filterSeason === '' || review.season.toString() === filterSeason;
      const episodeMatch = filterEpisode === '' || review.episode.toString() === filterEpisode;
      return seasonMatch && episodeMatch;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="reviews-container p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-5 text-center">Customer Reviews</h2>
      <div className="mb-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search by Season..."
          value={filterSeason}
          onChange={(e) => setFilterSeason(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full md:w-1/3 mr-2"
        />
        <input
          type="text"
          placeholder="Search by Episode..."
          value={filterEpisode}
          onChange={(e) => setFilterEpisode(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full md:w-1/3"
        />
      </div>
      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map(review => (
            <div key={review._id} className="review-card bg-white p-5 mb-4 shadow-md rounded-lg">
              {review.photo && (
                <img
                  src={review.photo}
                  alt="Reviewer Profile"
                  className="rounded-full w-16 h-16 mr-4"
                />
              )}
              <div>
                <h3 className="text-2xl font-semibold">{review.title}</h3>
                {review.name && <p className="text-gray-600 font-medium mb-1">{review.name}</p>}
                <div className="rating flex items-center mb-2">
                  {[...Array(10)].map((_, i) => (
                    <FaStar key={i} color={i < review.rating ? "#ffc107" : "#e4e5e9"} />
                  ))}
                </div>
                <p className="review-content text-gray-700">{review.content}</p>
                {review.season && review.episode && (
                  <p className="text-gray-600 font-medium">Season {review.season}, Episode {review.episode}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
