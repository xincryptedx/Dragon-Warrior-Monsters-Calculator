import recipes from "../data/recipes";

const generateRecipesByMonster = () => {
  const recipesByMonster = {};

  recipes.forEach((recipe) => {
    const { base, mate, offspring } = recipe;

    if (!recipesByMonster[offspring]) {
      recipesByMonster[offspring] = [];
    }

    recipesByMonster[offspring].push({ base, mate });
  });

  console.log(recipesByMonster);
  return recipesByMonster;
};

export default generateRecipesByMonster;
