// FeedbackOptions/FeedbackOptions.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from '@mui/material';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {Object.keys(options).map(option => (
        <Button
          key={option}
          variant="contained"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
