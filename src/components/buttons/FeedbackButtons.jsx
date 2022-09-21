import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return options.map((btnName, i) => {
    return (
      <button
        key={btnName}
        type="button"
        name={btnName}
        className={styles[btnName]}
        onClick={onLeaveFeedback}
      >
        {btnName}
      </button>
    );
  });
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
