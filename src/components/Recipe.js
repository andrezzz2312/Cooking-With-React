import React, {useContext, useState} from 'react';
import IngredientList from './IngredientList';
import {RecipeContext} from './App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

export default function Recipe(props) {
  const {
    handleRecipeDelete,
    handleRecipeSelect,
    handleSelectedRecipeDescription,
  } = useContext(RecipeContext);

  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    descriptionVisible,
  } = props;

  const [description, setDescription] = useState('');

  function handleDescriptionEdit() {
    setDescription('description-visible');
  }

  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3
          className='recipe__title '
          onClick={() => {
            if (descriptionVisible === 'description-visible') {
              handleSelectedRecipeDescription(undefined);
            } else {
              handleSelectedRecipeDescription(id);
            }
          }}
        >
          {name}
        </h3>
        <div className='btn-recipe-edit-delete-wrapper'>
          <button
            className='btn btn--primary btn--rd'
            onClick={() => {
              handleSelectedRecipeDescription(id);
              handleRecipeSelect(id);
              handleDescriptionEdit();
            }}
          >
            <FontAwesomeIcon icon={faEdit} className='edit' />
          </button>
          <button
            className='btn btn--danger btn--rd'
            onClick={() => handleRecipeDelete(id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} className='delete' />
          </button>
        </div>
      </div>
      <div className={`recipe__description ${descriptionVisible}`}>
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
