
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { useState } from 'react';

function Feedback () {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);


  const handleLeaveFeedback = option => {
      switch (option){
        case 'good':
          setGood(good + 1)
          break
        case 'neutral':
          setNeutral(neutral + 1)
          break
        case 'bad':
          setBad(bad + 1)
          break
        default:
          return
      }
  };



  const countTotalFeedback = () => {
 return good + neutral + bad
  }

 const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const goodFb = good;

    const perGood = `${(goodFb/total * 100).toFixed(2)}%`;
    if (perGood ==="NaN%"){
      return "0%"
    }
    return perGood;
  }

    return(
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions  options={["good","neutral","bad"]} onLeaveFeedback={handleLeaveFeedback}/>
        </Section>
        <Section title={"Staticks"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    )

}

export default Feedback;
