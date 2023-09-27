import React from 'react';
import { useState, useContext } from 'react';
import Cart from './shared/Cart';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const handleTextChange = (e) => {
    if (text === '') {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Feedback Should be more than 10 characters');
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const FeedbackFormData = {
        text: text,
        rating: rating,
      };
      FeedbackFormData.id = uuidv4();
      // console.log(FeedbackFormData);
      addFeedback(FeedbackFormData);
      setText('');
    } else {
      console.log('Please enter a valid feedback');
    }
  };

  return (
    <Cart>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service with us!</h2>
        {/* rating select component goes here */}
        <RatingSelect
          select={(rating) => {
            setRating(rating);
            // setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={buttonDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Cart>
  );
}

export default FeedbackForm;
