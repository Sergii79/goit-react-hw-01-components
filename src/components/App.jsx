// import { RecipeList } from "./RecipeList/RecipeList";
// import recipes from "../recipes.json";
// import { ProfileList } from "./Profile/ProfileList";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";



import user from "./Profile/user";
import { Profile } from "./Profile/Profile";


export const App = () => {
  return (
    <Layout>     
      <Profile items={user} />
      <GlobalStyle />
    </Layout>
  );
};


