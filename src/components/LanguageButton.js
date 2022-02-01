import React from 'react';
import App from './App';
import {FaBeer} from 'react-icons/fa';
import mexico from '../assets/mx.png';

export default function LanguageButton() {
  return (
    <div className='languangeButton'>
      <div className='languageButton-wrapper'>
        <img className='icon' src={mexico} />
      </div>
    </div>
  );
}
