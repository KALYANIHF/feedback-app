import { React, createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus nostrum earum amet odit laborum blanditiis ipsum quisquam praesentium veniam! Fuga totam, iusto ipsum in quod saepe aut. Rerum, asperiores!',
      rating: 10,
    },
    {
      id: 2,
      text: 'lorem ipsum dolor sit amet consectetur adipis',
      rating: 9,
    },
    {
      id: 3,
      text: 'lorem296 delit vel vel aug commodo so et just eum in pretium euismod in pretium',
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    // console.log("app", id);
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const addFeedback = (data) => {
    setFeedback([data, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
