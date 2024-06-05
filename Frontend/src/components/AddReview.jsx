import React, { useState } from 'react';

const AddReview = ({ onAddReview }) => {
 
  const [newReview, setNewReview] = useState({
    title: '',
    rating: 0,
    content: '',
    name: '',
    photo: null,
    season: '',
    episode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Track success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewReview({ ...newReview, photo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    if (!newReview.title || !newReview.rating || !newReview.content || !newReview.name || newReview.rating < 1 || newReview.rating > 10) {
      alert('Please fill out all fields correctly.');
      setIsSubmitting(false);
      return;
    }

    if (newReview.photo) {
      const reader = new FileReader();
      reader.readAsDataURL(newReview.photo);
      reader.onload = async () => {
        newReview.photo = reader.result;

        try {
          const response = await fetch('http://localhost:5000/api/reviews', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          onAddReview(data);
          setNewReview({ // Clear form after successful submission
            title: '',
            rating: 0,
            content: '',
            name: '',
            photo: null,
            season: '',
            episode: '',
          });
          setIsSubmitting(false);
          setSubmissionSuccess(true); // Set success state for notification
        } catch (error) {
          console.error('Error adding review:', error);
          setIsSubmitting(false);
        }
      };
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        onAddReview(data);
        setNewReview({ // Clear form after successful submission
          title: '',
          rating: 0,
          content: '',
          name: '',
          photo: null,
          season: '',
          episode: '',
        });
        setIsSubmitting(false);
        setSubmissionSuccess(true); // Set success state for notification
      } catch (error) {
        console.error('Error adding review:', error);
        setIsSubmitting(false);
      }
    }
  };


  return (
    <div className="add-review-container p-5 bg-white rounded-lg shadow-md mt-5">
      <h3 className="text-2xl font-bold mb-3 text-center">Add a Review</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="flex flex-col">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="p-2 border border-gray-400 rounded w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="photo" className="block text-gray-700 font-medium mb-1">
              Photo(jpeg)
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 border border-gray-400 rounded w-full"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <label htmlFor="season" className="block text-gray-700 font-medium mb-1">
              Season
            </label>
            <input
              type="text"
              id="season"
              name="season"
              value={newReview.season}
              onChange={handleInputChange}
              className="p-2 border border-gray-400 rounded w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="episode" className="block text-gray-700 font-medium mb-1">
              Episode
            </label>
            <input
              type="text"
              id="episode"
              name="episode"
              value={newReview.episode}
              onChange={handleInputChange}
              className="p-2 border border-gray-400 rounded w-full"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newReview.title}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-1">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="10"
            value={newReview.rating}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="block text-gray-700 font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={
            function(){
              alert('if you wil not get any alert after that , then it means its submitted  ')
              alert("😃")
              alert('Bazinga! Just kidding after this one, make sure to clear the form to add another review and refresh if you wanna see your review ')
            }
          }
        >
          Submit Review
        </button >
      </form>
    </div>
  );
};

export default AddReview;
