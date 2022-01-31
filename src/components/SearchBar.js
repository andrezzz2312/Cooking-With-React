import {React, useContext} from 'react';
import {SearchContext} from './RecipeList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
  const {isVis, sb, sbw, rli} = props;
  const {setFocusSearch, setIsVis, handleVis} = useContext(SearchContext);

  return (
    <div className={`searchbar ${sb}`}>
      <div className={`searchbar-wrapper ${sbw}`}>
        <input
          className={`recipe-list__input ${rli}`}
          id='searchInput'
          type='text'
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
