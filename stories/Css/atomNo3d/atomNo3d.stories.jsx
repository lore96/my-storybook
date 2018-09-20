import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/pureCssItem/atomNo3d/atomNo3d.scss';

storiesOf('CSS', module)
  .add('AtomNo3d', () => (
    <div className="atom-container">
      <div className="atom-circle atom-rotate__90">
        <div className="atom-inner-circle"></div>
      </div>
      <div className="atom-circle atom-rotate__180">
        <div className="atom-inner-circle"></div>
      </div>  
      <div className="atom-circle atom-rotate__250">
        <div className="atom-inner-circle"></div>
      </div>
      <div className="atom-nestedCircle"></div>
    </div>
  ));
