import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './orbitSphereStories.scss';

storiesOf('CSS', module)
  .add('orbitSphere', () => (
    <div className="orbit-sphere-scene">
        <div className="circle"></div>
    </div>
));
