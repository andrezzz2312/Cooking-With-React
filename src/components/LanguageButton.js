import React from 'react';
import App from './App';
import {FaBeer} from 'react-icons/fa';

export default function LanguageButton() {
  return (
    <div className='languangeButton'>
      <div className='languageButton-wrapper'>
        <FaBeer className='icon' />
        <span className='ae fi-gr icon'></span>
        <span className='fi fi-gr fis icon'></span>
      </div>
    </div>
  );
}
