import React, {useContext, useState} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

// to create the template just type: "rfc"

export default function RecipeList({recipes}) {
  const {
    handleRecipeAdd,
    selectedRecipeDescription,
    handleSelectedRecipeDescription,
  } = useContext(RecipeContext);

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
        dis: false,
      });
    } else {
      setSearchVisibility({
        sb: '',
        sbw: '',
        rli: '',
        dis: true,
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

      <div className={`searchbar ${searchVisibility.sb}`}>
        <div className={`searchbar-wrapper ${searchVisibility.sbw}`}>
          <input
            className={`recipe-list__input ${searchVisibility.rli}`}
            id='searchInput'
            type='text'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='search'
            onClick={() => {
              setFocusSearch();
              setIsVis(!isVis);
              handleVis(isVis);
            }}
          />
        </div>
      </div>
    </div>
  );
}
