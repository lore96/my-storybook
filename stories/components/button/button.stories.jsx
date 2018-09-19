import React from 'react';

import { storiesOf } from '@storybook/react';
import MaterialButton from './materialButton';

import style from './materialButton.scss';

storiesOf('Material Button', module)
  .add('with text', () => (
    <div className="container!">
      <MaterialButton type="button" onClick={()=>{console.log('click')}} textValue="HELLO"></MaterialButton>
    </div>
  ));
