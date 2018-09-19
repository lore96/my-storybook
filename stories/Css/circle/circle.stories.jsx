import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/pureCssItem/circle/circle.scss';

storiesOf('CSS', module)
  .add('Circle', () => (
    <div className="">
      <div className="circle"><div className="nestedCircle"></div></div>
    </div>
  ));
