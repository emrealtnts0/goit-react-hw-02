import c from "./Options.module.css";
import PropTypes from 'prop-types';

const Options = ({ voteData, updateFeedback, totalFeedback, resetTotal }) => {
  const btnOptions = Object.keys(voteData);
  return (
    <div className={c.container}>
      {btnOptions.map((option) => {
        return (
          <button
            key={option}
            className={`${c.btn} ${c.rotated}`}
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button onClick={() => resetTotal()} className={`${c.reset} ${c.rotated}`}>
          reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  voteData: PropTypes.object.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetTotal: PropTypes.func.isRequired,
};

export default Options;