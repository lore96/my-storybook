import React from 'react';
import styles from './welcome.css';

import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
  .add('Hello', () => (<div>
    <h1 className="title"> Hello explorer </h1>
    <p className="paragraph"> This is where I will collect all my small components, 
    samples, utilities etc. etc. <br />
    I hope you will enjoying seeing my or, however, I hope you will find something usefull to use in to your app!😎 👍 <br />
    Thank you, Lorenzo 😀 </p> 
  </div>)
);
