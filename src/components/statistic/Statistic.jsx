import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({
  positive,
  neutral,
  negative,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span>positive:</span>
        <span>{positive}</span>
      </li>
      <li className={styles.item}>
        <span>neutral:</span>
        <span>{neutral}</span>
      </li>
      <li className={styles.item}>
        <span>negative:</span>
        <span>{negative}</span>
      </li>
      <li className={styles.item}>
        <span>total:</span>
        <span>{total}</span>
      </li>
      <li className={styles.item}>
        <span>positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  positive: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  negative: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
