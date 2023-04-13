import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../recipes.json";


export const App = () => {
  return (
    <>
      <RecipeList items={recipes}/>
    </>
  );
};

