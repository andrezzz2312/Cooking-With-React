import {React, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const [isVis, setIsVis] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState({
    sb: '',
    sbw: '',
    rli: '',
  });
  function handleVis(e) {
    if (e) {
      setSearchVisibility({
        sb: 'searchbar-showed',
        sbw: 'searchbar-wrapper-showed',
        rli: 'recipe-list__input-showed',
      });
    } else {
      setSearchVisibility({
        sb: '',
        sbw: '',
        rli: '',
      });
    }
  }

  function setFocusSearch() {
    document.getElementById('searchInput').focus();
  }

  return (
    <div className={`searchbar ${searchVisibility.sb}`}>
      <div className={`searchbar-wrapper ${searchVisibility.sbw}`}>
        <input
          className={`recipe-list__input ${searchVisibility.rli}`}
          id='searchInput'
          type='text'
          onChange={'a'}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='search'
          onClick={() => {
            setIsVis(!isVis);
            handleVis(isVis);
            setFocusSearch();
          }}
        />
      </div>
    </div>
  );
}
