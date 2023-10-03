import recipes from "../data/recipes";

const generateRecipesByMonster = () => {
  const recipesByMonster = {};

  recipes.forEach((recipe) => {
    const { base, mate, offspring } = recipe;

    recipesByMonster[offspring] = [
      ...recipesByMonster[offspring],
      { base, mate },
    ];
  });

  console.log(recipesByMonster);
  return recipesByMonster;
};

export default generateRecipesByMonster;
