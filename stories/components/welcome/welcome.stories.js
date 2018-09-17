import React from 'react';
import styles from './welcome.scss';

import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
  .add('Hello', () => (<div className='bkg-light'>
    <div  className='bkg-dark'>
      <div>
        <h1 > HELLO EXPLORER 🕵🏻‍♂️</h1>
        <p > This is where I will collect all my small components, 
        samples, utilities etc. etc. <br />
        I hope you will enjoying seeing all my experimental works.</p> 
      </div>
      <div>
        <p className='icon'>👨🏼‍🔬 🔬</p> <br />
        <p className='centered wow'> Let's made the science begin!</p>
        <p className='centered'>Thank you, Lorenzo 😀 </p> 
      </div>
    </div>
  </div>)
);
