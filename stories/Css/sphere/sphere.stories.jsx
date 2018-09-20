import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/pureCssItem/sphere/sphere.scss';

storiesOf('CSS', module)
  .add('Sphere', () => (
    <div className="sphere-container">
        <ul className="sphere">
            <li className="plane-v"></li><li className="plane-h"></li>
            <li className="plane-v"></li><li className="plane-h"></li>
            <li className="plane-v"></li><li className="plane-h"></li>
            <li className="plane-v"></li><li className="plane-h"></li>
            <li className="plane-v"></li><li className="plane-h"></li>
            <li className="plane-v"></li><li className="plane-h"></li>
        </ul>
    </div>
  ));
