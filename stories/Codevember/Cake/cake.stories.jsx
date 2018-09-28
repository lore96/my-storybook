import React from 'react';

import { storiesOf } from '@storybook/react';

import style from '../../../src/codevember/cake/cake.scss';


storiesOf('Codevember', module)
  .add('Day #2: Cake', () => (
        <ul className="cake-container">
            <li className="cake-plane">
                <div className="drip-top-container">
                    <div className="drip-top drip-top-shape-1"></div>
                    <div className="drip-top drip-top-shape-2"></div>
                    <div className="drip-top drip-top-shape-3"></div>
                </div>
            </li>
            <li className="cake-plane">
                <div className="drip-middle-container">
                    <div className="drip-middle drip-middle-shape-1"></div>
                    <div className="drip-middle drip-middle-shape-2"></div>
                    <div className="drip-middle drip-middle-shape-3"></div>
                </div>
            </li>
            <li className="cake-plane">
                <div className="drip-bottom-container">
                    <div className="drip-bottom drip-bottom-shape-1"></div>
                        <div className="drip-bottom drip-bottom-shape-2"></div>
                        <div className="drip-bottom drip-bottom-shape-3"></div>
                    </div>
            </li>
        </ul>
  ));
