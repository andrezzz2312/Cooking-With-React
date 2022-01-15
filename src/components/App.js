import React, {useState} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

export default function App() {
  const [recipe, setRecipes] = useState(sampleRecipes);

  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}
// 2:44
// function handleRecipeAdd() {
//   const newRecipe = {
//     // id: Date.now().toString()
//     id: 1,
//   };
// }

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on Chicken \n2. Put chicken in oven \n3. Eat chicken',

    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on Pork \n2. Put pork in oven \n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs',
      },
    ],
  },
];
