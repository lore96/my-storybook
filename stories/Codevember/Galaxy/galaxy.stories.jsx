import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/codevember/galaxy/galaxy.scss';

storiesOf('Codevember', module)
  .add('Galaxy', () => (
    <div>
        <div className="star-container__large">
            <div className="star"></div>
        </div>
        <div className="star-container__medium">
            <div className="star"></div>
        </div>
        <div className="star-container__small">
            <div className="star"></div>
        </div>
    </div>
  ));
