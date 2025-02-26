import { useEffect, useState } from "react";
// import "./App.css";

import Description from "./Description";
import Options from "./options";
import Feedback from "./FeedBack";
import Notification from "./Notifications";

function App() {
  const [voteData, setVoteData] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("reviews"));
    if (localData) {
      return localData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(voteData));
  }, [voteData]);

  const updateFeedback = (feedbackType) => {
    setVoteData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = voteData.good + voteData.neutral + voteData.bad;
  const resetTotal = () => {
    setVoteData({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((voteData.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        voteData={voteData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetTotal={resetTotal}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback !== 0 && (
        <Feedback
          voteData={voteData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;