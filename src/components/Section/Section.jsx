import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Section = ({ title, children }) => {
  return (
    <Paper elevation={3}>
      <Typography
        variant="h4"
        xl={{
          p: 4,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
