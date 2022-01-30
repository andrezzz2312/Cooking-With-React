import React, {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

// to create the template just type: "rfc"

export default function RecipeList({recipes}) {
  const {handleRecipeAdd, handleScroll} = useContext(RecipeContext);
  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
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

      {/* <div className='searchbar'>
        <input className='recipe-list__input' type='text' />
        <FontAwesomeIcon icon={faSearch} className='search' />
      </div> */}
    </div>
  );
}
