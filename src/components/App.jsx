import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Profile } from "./Profile/ProfileCard";

import user from "../user.json";


export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <Profile itemx={user} />
      <GlobalStyle />
    </Layout>
  );
};


