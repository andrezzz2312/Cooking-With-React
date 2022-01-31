import React, {useContext, useState} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App';

import SearchBar from './SearchBar';

// to create the template just type: "rfc"

export default function RecipeList({recipes}) {
  const {handleRecipeAdd, selectedRecipeDescription} =
    useContext(RecipeContext);

  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          if (selectedRecipeDescription === recipe.id) {
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
      <SearchBar />
    </div>
  );
}
