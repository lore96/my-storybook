import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './atom.scss';

const orbitSphereJSX90 = (
  <div className="orbiting-container orbiting-rotate__90">
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

const orbitSphereJSX250 = (
  <div className="orbiting-container orbiting-rotate__250">
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


const orbitSphereJSX180 = (
  <div className="orbiting-container orbiting-rotate__180">
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
  .add('3DAtom', () => (
    <div className="atom-container">
        {orbitSphereJSX90}
        {orbitSphereJSX180}
        {orbitSphereJSX250}
        <div className="atom-nucleus"></div>
    </div>
  ));
