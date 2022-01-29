import React, {useContext, useEffect, useState} from 'react';
import IngredientList from './IngredientList';
import {RecipeContext} from './App';

export default function Recipe(props) {
  const {handleRecipeDelete, handleRecipeSelect} = useContext(RecipeContext);

  const {id, name, cookTime, servings, instructions, ingredients} = props;

  const [description, setDescription] = useState('');

  function handleDescription() {
    if (description === '') {
      setDescription('description-visible');
    } else {
      setDescription('');
    }
  }
  function handleDescriptionEdit() {
    setDescription('description-visible');
  }

  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3 className='recipe__title ' onClick={() => handleDescription()}>
          {name}
        </h3>
        <div className='btn-recipe-edit-delete-wrapper'>
          <button
            className='btn btn--primary mr-1 btn--rd'
            onClick={() => {
              handleRecipeSelect(id);
              handleDescriptionEdit();
            }}
          >
            Edit
          </button>
          <button
            className='btn btn--danger btn--rd'
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className={`recipe__description ${description}`}>
        <div className='recipe__row'>
          <span className='recipe__label'>Cook Time:</span>
          <span className='recipe__value'>{cookTime}</span>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>Servings:</span>
          <span className='recipe__value'>{servings}</span>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>Instructions</span>
          <div className='recipe__value recipe__value--indented recipe__instructions'>
            {instructions}
          </div>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>Ingredients:</span>
          <div className='recipe__value recipe__value--indented'>
            <IngredientList ingredients={ingredients} />
          </div>
        </div>
      </div>
    </div>
  );
}
