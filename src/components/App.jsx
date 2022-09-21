import { useState } from 'react';

import Section from './section/Section';
import Statistic from './statistic/Statistic';
import FeedbackButtons from './buttons/FeedbackButtons';
import Notification from './notification/Notification';
import styles from '../components/section/Container.module.css';

export const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'positive':
        setPositive(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'negative':
        setNegative(state => state + 1);
        break;

      default:
        return;
    }
  };

  const total = positive + neutral + negative;
  const positivePercentage = Math.round((positive / total) * 100);

  return (
    <>
      <div className={styles.container}>
        <Section title="please leave feedback" className={styles.hero__title}>
          <div className={styles.btn_box}>
            <FeedbackButtons
              options={['positive', 'neutral', 'negative']}
              onLeaveFeedback={onLeaveFeedback}
            />
          </div>
        </Section>

        {!total ? (
          <Notification message="there is no feedback" />
        ) : (
          <Section title="statistic" className={styles.secondary__title}>
            <Statistic
              positive={positive}
              neutral={neutral}
              negative={negative}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    </>
  );
};
