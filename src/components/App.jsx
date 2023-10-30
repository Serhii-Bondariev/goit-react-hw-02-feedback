import React from 'react';
import { Feedback } from './Feedback/Feedback';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

export const App = () => {
  return (
    <ScopedCssBaseline>
      <div>
        <Feedback />
      </div>
    </ScopedCssBaseline>
  );
};
