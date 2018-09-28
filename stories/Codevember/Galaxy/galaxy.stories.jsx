import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/codevember/galaxy/galaxy.scss';

const a = [];

for(let i=0; i<500; i++){
    a.push(i);
}

storiesOf('Codevember', module)
  .add('Day #1: Galaxy', () => (
    <div className="galaxy-container">
        {a.map((index) => {
            return <div className={`star-container-large-${index}`} key={`large-${index}`}></div>;
        })}
        {a.map((index) => {
            return <div className={`star-container-medium-${index}`} key={`medium-${index}`}></div>;
        })}
        {a.map((index) => {
            return <div className={`star-container-small-${index}`} key={`small-${index}`}></div>;
        })}
    </div>
  ));
