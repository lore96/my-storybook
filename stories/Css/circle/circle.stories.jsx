import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/pureCssItem/circle/circle.scss';

storiesOf('CSS', module)
  .add('Circle', () => (
    <div className="atomContainer">
      <div className="circle rotate__90">
        <div className="inner-circle"></div>
      </div>
      <div className="circle rotate__180"></div>  
      <div className="circle rotate__250"></div>
      <div className="nestedCircle"></div>
    </div>
  ));
