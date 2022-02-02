import React, {useContext, useEffect, useState} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import {RecipeContext} from './App';
import {v4 as uuidv4} from 'uuid';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';

export default function RecipeEdit({recipe}) {
  const {handleRecipeChange, handleRecipeSelect, language} =
    useContext(RecipeContext);

  const [visible, setVisible] = useState(false);

  const ingredientDiv = document.getElementById('ingredientz');

  useEffect(() => {
    setVisible(true);
  }, []);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, {...recipe, ...changes});
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ingredients: newIngredients});
  }

  function handleIngredientDelete(id) {
    handleChange({ingredients: recipe.ingredients.filter((i) => i.id !== id)});
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: '',
    };
    handleChange({ingredients: [...recipe.ingredients, newIngredient]});
  }
  return (
    <div className={`recipe-edit recipe-edit-${visible}`}>
      <div className='recipe-edit-wrapper'>
        <div className='recipe-edit__remove-button-container'>
          <button
            className=' recipe-edit__remove-button'
            onClick={() => {
              setVisible(false);

              setTimeout(() => {
                handleRecipeSelect(undefined);
              }, 1000);
            }}
          >
            &times;
          </button>
        </div>
        <div className='recipe-edit__details-grid'>
          <label htmlFor='name' className='recipe-edit__label'>
            {language.name}
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={recipe.name}
            autoFocus
            onChange={(e) => handleChange({name: e.target.value})}
            className='recipe-edit__input'
          />
          <label htmlFor='name' className='recipe-edit__label'>
            {language.cookTime}
          </label>
          <input
            type='text'
            name='cookTime'
            id='cookTime'
            onChange={(e) => handleChange({cookTime: e.target.value})}
            value={recipe.cookTime}
            className='recipe-edit__input'
          />
          <label htmlFor='name' className='recipe-edit__label'>
            {language.servings}
          </label>
          <input
            type='number'
            min='1'
            name='servings'
            id='servings'
            onChange={(e) =>
              handleChange({servings: parseInt(e.target.value) || ''})
            }
            value={recipe.servings}
            className='recipe-edit__input'
          />
          <label htmlFor='instructions' className='recipe-edit__label'>
            {language.instructions}
          </label>
          <textarea
            name='instructions'
            onChange={(e) => handleChange({instructions: e.target.value})}
            value={recipe.instructions}
            id='instructions'
            className='recipe-edit__input'
          />
        </div>
        <br />

        <label className='recipe-edit__label'>{language.ingredients}</label>
        <div className='recipe-edit__ingredient-label'>
          <div>{language.name}</div>
          <div>{language.amount}</div>
        </div>
        <div className='recipe-edit__ingredient-wrapper'>
          <div className='recipe-edit__ingredient-scroll'>
            <FaArrowUp
              onClick={() => {
                setTimeout(() => {
                  ingredientDiv.scrollTop -= 43.33;
                }, 50);
              }}
            />
            <FaArrowDown
              onClick={() => {
                setTimeout(() => {
                  ingredientDiv.scrollTop += 43.33;
                }, 50);
              }}
            />
          </div>
          <div id='ingredientz' className='recipe-edit__ingredient-grid'>
            {recipe.ingredients.map((ingredient) => (
              <RecipeIngredientEdit
                key={ingredient.id}
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                ingredient={ingredient}
              />
            ))}
          </div>
        </div>

        <div className='recipe-edit__add-ingredient-btn-container'>
          <button
            onClick={() => {
              handleIngredientAdd();
              setTimeout(() => {
                ingredientDiv.scrollTop = ingredientDiv.scrollHeight;
              }, 50);
            }}
            className='btn btn--primary'
          >
            {language.addIngredient}
          </button>
        </div>
      </div>
    </div>
  );
}
