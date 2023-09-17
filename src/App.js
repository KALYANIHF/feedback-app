import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import Cart from "./components/shared/Cart";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <FeedbackList feedbackData={feedback} />
      <h1>My App</h1>
      <Cart>this is a feedback list</Cart>
    </>
  );
}
export default App;
