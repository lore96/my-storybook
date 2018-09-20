import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './atom.scss';

const atomSphereJSX = (
  <div className="atom-sphere rotate-around">
    <div className="atom-sphere__container">
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
  );

storiesOf('CSS', module)
  .add('3DAtom', () => (
    <div className="atom-container">
      <div className="circle rotate__90">
        {atomSphereJSX}
       </div>
      <div className="circle rotate__180">
        {atomSphereJSX}
      </div>  
      <div className="circle rotate__250">
        {atomSphereJSX}
      </div>
      <div className="nestedCircle"></div>
    </div>
  ));
