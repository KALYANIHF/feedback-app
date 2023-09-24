import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackState from "./components/FeedbackState";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import Cart from "./components/shared/Cart";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    // console.log("app", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (data) => {
    setFeedback([data, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackState feedback={feedback} />
        <FeedbackList feedbackData={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
