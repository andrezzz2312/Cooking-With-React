import React, {useContext, useEffect, useState} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import {RecipeContext} from './App';
import {v4 as uuidv4} from 'uuid';

export default function RecipeEdit({recipe}) {
  const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('Render');
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
      <div className='recipe-edit__remove-button-container'>
        <button
          className='btn recipe-edit__remove-button'
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
          Name
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
          Cook Time
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
          Servings
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
          Instructions
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
      <label className='recipe-edit__label'>Ingredients</label>

      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button
          onClick={() => handleIngredientAdd()}
          className='btn btn--primary'
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
