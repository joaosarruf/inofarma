// Review.jsx
import React, { useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");

    const handleReviewSubmit = () => {
        setReviews([...reviews, newReview]);
        setNewReview("");
    };

    return (
        <div className="review-section">
            <h2>Avaliações dos Clientes</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
            <input 
                type="text" 
                placeholder="Deixe sua avaliação..." 
                value={newReview} 
                onChange={(e) => setNewReview(e.target.value)} 
            />
            <button onClick={handleReviewSubmit}>Enviar Avaliação</button>
        </div>
    );
};

export default Review;
