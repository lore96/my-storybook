import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './orbitSphereStories.scss';

const orbitSphereJSX = (
    <div className="orbiting-container">
        <div className="circle"></div>
        <div className="orbiting-sphere animating-orbit">
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
        </div>
    </div>
);

storiesOf('CSS', module)
  .add('Orbit Sphere', () => (
    <div className="orbit-sphere-scene">
        {orbitSphereJSX}
    </div>
));
