import PropTypes from 'prop-types';

const Feedback = ({ voteData, totalFeedback, positiveFeedback }) => {
    const { good, neutral, bad } = voteData;
    return (
      <div>
        <ul className='list-feedback'>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{totalFeedback}</li>
          <li>Positive:{positiveFeedback}%</li>
        </ul>
      </div>
      );
  };
  
  Feedback.propTypes = {
    voteData: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };
  
  export default Feedback;