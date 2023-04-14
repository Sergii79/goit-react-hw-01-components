import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
// import { Layout } from "./Layout/Layout";


export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </>
  );
};

