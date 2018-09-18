import React from 'react';

import { storiesOf } from '@storybook/react';

import style from './welcome.scss';

storiesOf('Welcome', module)
  .add('Hello', () => (
    <div className="bkg-light">
      <div className="bkg-dark">
        <div>
          <h1>
            HELLO EXPLORER
            <span role="img" aria-label="explorer">🕵🏻‍♂️</span>
          </h1>
          <p>
          This is where I will collect all my small components,
           samples, utilities etc. etc.
            <br />
            I hope you will enjoying seeing all my experimental works.
          </p>
        </div>
        <div>
          <p className="icon">
            <span role="img" aria-label="science">👨🏼‍🔬 🔬</span>
          </p>
          <br />
          <p className="centered wow flash">Let‘s made the science begin!</p>
          <p className="centered">
            Thank you, Lorenzo
            <span role="img" aria-label="happy">😀</span>
          </p>
        </div>
      </div>
    </div>
  ));
