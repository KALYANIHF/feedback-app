import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackData, handleDelete }) {
  if (!feedbackData || feedbackData.length === 0) {
    return "No feedback";
  }
  return (
    <>
      <AnimatePresence>
        {feedbackData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}

export default FeedbackList;
