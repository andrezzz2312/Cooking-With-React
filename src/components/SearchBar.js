import {React, useState} from 'react';
import {FaSearch} from 'react-icons/fa';

export default function SearchBar({handleSearchValue}) {
  const input = document.getElementById('searchInput');
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
      handleSearchValue('');
      setSearchVisibility({
        sb: '',
        sbw: '',
        rli: '',
      });
    }
  }

  function setFocusSearch() {
    input.focus();
  }
  function clearInput() {
    input.value = '';
  }

  return (
    <div className={`searchbar ${searchVisibility.sb}`}>
      <div className={`searchbar-wrapper ${searchVisibility.sbw}`}>
        <input
          className={`recipe-list__input ${searchVisibility.rli}`}
          id='searchInput'
          type='text'
          onKeyUp={(e) => handleSearchValue(e.target.value)}
        />
        <FaSearch
          className='search'
          onClick={() => {
            clearInput();
            setIsVis(!isVis);
            handleVis(isVis);
            setFocusSearch();
          }}
        />
      </div>
    </div>
  );
}
