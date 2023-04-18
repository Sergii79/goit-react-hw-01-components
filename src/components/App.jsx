import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";


import user from "./Profile/user";
import { Profile } from "./Profile/Profile";

import data from "./Statistics/data";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <Layout>     
      <GlobalStyle />
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
    </Layout>
  );
};


