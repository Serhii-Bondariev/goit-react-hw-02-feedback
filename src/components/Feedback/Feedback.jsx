import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,

  backgroundColor: theme.palette.background.paper,
  border: '2px solid #194df9',
  boxShadow: theme.shadows[5],
  fontSize: '16px',
  borderRadius: '10px',
  fontWeight: 'bold',

  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  textAlign: 'center',

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12),
  },
}));

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? (good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Div>
        <h1>Please leave feedback</h1>
        <ButtonGroup aria-label="outlined primary button group">
          <Button variant="contained" name="good" onClick={this.handleFeedback}>
            Good
          </Button>
          <Button
            variant="contained"
            name="neutral"
            onClick={this.handleFeedback}
          >
            Neutral
          </Button>
          <Button variant="contained" name="bad" onClick={this.handleFeedback}>
            Bad
          </Button>
        </ButtonGroup>

        <h2>Statistics</h2>
        {total ? (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </>
        ) : (
          <p>No feedback given</p>
        )}
      </Div>
    );
  }
}

export default Feedback;
