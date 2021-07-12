import { FC } from "react";

import "./App.scss";
import { Header, Footer } from "./components/layouts";
import { UserList } from "./components/modules";

const App: FC = () => (
  <div className="app">
    <Header />
    <main className="main">
      <UserList />
    </main>
    <Footer />
  </div>
);

export default App;
