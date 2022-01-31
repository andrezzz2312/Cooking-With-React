import React, {useContext, useState} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App';

import SearchBar from './SearchBar';

// to create the template just type: "rfc"
export const SearchContext = React.createContext();

export default function RecipeList({recipes}) {
  const {handleRecipeAdd, selectedRecipeDescription} =
    useContext(RecipeContext);

  const [isVis, setIsVis] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState({
    sb: '',
    sbw: '',
    rli: '',
  });

  const SearchContextValue = {
    setFocusSearch,
    setIsVis,
    handleVis,
  };

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
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          const check = selectedRecipeDescription;

          if (check === recipe.id) {
            recipe.descriptionVisible = 'description-visible';
          } else {
            recipe.descriptionVisible = '';
          }

          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button
          className='btn btn--primary'
          onClick={() => {
            handleRecipeAdd();
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight);
            }, 50);
          }}
        >
          Add Recipe
        </button>
      </div>
      <SearchContext.Provider value={SearchContextValue}>
        <SearchBar {...searchVisibility} isVis={isVis} />
      </SearchContext.Provider>
    </div>
  );
}
