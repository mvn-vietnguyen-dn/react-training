import { Component } from "react";

import "./App.scss";
import { Header, Footer } from "./components/layouts";
import { Form } from "./components/modules";

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <Form/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
