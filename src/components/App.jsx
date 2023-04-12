import { RecipeList } from "./RecipeList";
import recipes from "../";


export const App = () => {
  return (
    <div>
      <RecipeList items={recipes}/>
    </div>
  );
};

