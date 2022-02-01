import {React, useContext, useState} from 'react';
import mexico from '../assets/mx.png';
import usa from '../assets/usa.png';
import {RecipeContext} from './App';

export default function LanguageButton() {
  const {handleLanguage} = useContext(RecipeContext);
  const [flag, setFlagz] = useState(mexico);

  function setFlag() {
    if (flag === mexico) {
      setFlagz(usa);
    } else {
      setFlagz(mexico);
    }
  }
  return (
    <div className='languangeButton'>
      <div className='languageButton-wrapper'>
        <img
          onClick={() => {
            handleLanguage();
            setFlag();
          }}
          className='icon'
          src={flag}
        />
      </div>
    </div>
  );
}
