import React from 'react';

import { storiesOf } from '@storybook/react';
import MaterialButton from '../../../src/components/button/materialButton';

import style from '../../../src/components/button/materialButton.scss';

storiesOf('Button', module)
  .add('with text', () => (
    <div className="container!">
      <MaterialButton type="button" onClick={()=>{console.log('click')}} textValue="HELLO"></MaterialButton>
    </div>
  ));
