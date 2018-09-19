import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/pureCssItem/circle/circle.scss';

storiesOf('CSS', module)
  .add('Circle', () => (
    <div className="atomContainer">
      <div className="circle rotate__X"></div>
      <div className="circle rotate__Y"></div>
      <div className="circle"></div>
      <div className="nestedCircle"></div>
    </div>
  ));
