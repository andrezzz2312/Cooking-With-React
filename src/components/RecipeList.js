import React, {useContext, useState} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App';

import SearchBar from './SearchBar';

// to create the template just type: "rfc"

export default function RecipeList({recipes}) {
  const [searchValue, setSearchValue] = useState('');

  const {handleRecipeAdd, selectedRecipeDescription, handleRecipeSelect} =
    useContext(RecipeContext);

  function handleSearchValue(e) {
    setSearchValue(e);
    handleRecipeSelect(undefined);
  }

  function show() {
    if (searchValue === '') {
      return recipes.map((recipe) => {
        if (selectedRecipeDescription === recipe.id) {
          recipe.descriptionVisible = 'description-visible';
        } else {
          recipe.descriptionVisible = '';
        }

        return <Recipe key={recipe.id} {...recipe} />;
      });
    } else {
      return recipes.map((recipe) => {
        if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) {
          if (selectedRecipeDescription === recipe.id) {
            recipe.descriptionVisible = 'description-visible';
          } else {
            recipe.descriptionVisible = '';
          }
          return <Recipe key={recipe.id} {...recipe} />;
        } else {
          return null;
        }
      });
    }
  }
  return (
    <div className='recipe-list'>
      <div>{show()}</div>
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
      <SearchBar handleSearchValue={handleSearchValue} />
    </div>
  );
}
