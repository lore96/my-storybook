import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './circleStories.scss';

storiesOf('CSS', module)
  .add('Circle', () => (
    <div className="circle-container">
      <div className="circle"></div>
    </div>
  ));
