import React from 'react';
import {CgScrollV} from 'react-icons/cg';

export default function RecipeIngredientEdit(props) {
  const {ingredient, handleIngredientChange, handleIngredientDelete} = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes});
  }
  return (
    <>
      <button className='recipe-edit__drag'></button>
      <input
        className='recipe-edit__input'
        type='text'
        onInput={(e) => handleChange({name: e.target.value})}
        value={ingredient.name}
      />
      <input
        className='recipe-edit__input'
        type='text'
        onInput={(e) => handleChange({amount: e.target.value})}
        value={ingredient.amount}
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className='btn btn--danger'
      >
        &times;
      </button>
    </>
  );
}
