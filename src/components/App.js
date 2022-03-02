import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import {v4 as uuidv4} from 'uuid';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

export default function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [selectedRecipeDescription, setSelectedRecipeDescription] = useState();
  const [language, setLanguage] = useState(languages[0]);

  function handleLanguage() {
    if (language.name === languages[0].name) {
      setLanguage(languages[1]);
    } else {
      setLanguage(languages[0]);
    }
  }

  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleSelectedRecipeDescription,
    selectedRecipeDescription,
    language,
    handleLanguage,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleSelectedRecipeDescription(id) {
    setSelectedRecipeDescription(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      // id: Date.now().toString() / Can set a random ID like this aswell
      id: uuidv4(),
      descriptionVisible: '',
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: '',
        },
      ],
    };

    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
    handleSelectedRecipeDescription(newRecipe.id);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    descriptionVisible: '',
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
    descriptionVisible: '',
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

const languages = [
  {
    cookTime: 'Cook Time',
    servings: 'Servings',
    instructions: 'Instructions',
    ingredients: 'Ingredients',
    name: 'Name',
    amount: 'Amount',
    addRecipe: 'Add Recipe',
    addIngredient: 'Add Ingredient',
  },
  {
    cookTime: 'Tiempo de cocción',
    servings: 'Porciones',
    instructions: 'Instrucciones',
    ingredients: 'Ingredientes',
    name: 'Nombre',
    amount: 'Monto',
    addRecipe: 'Nueva Receta',
    addIngredient: 'Añadir Ingrediente',
  },
];
