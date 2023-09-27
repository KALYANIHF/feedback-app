import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackState from './components/FeedbackState';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackState />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}
export default App;
