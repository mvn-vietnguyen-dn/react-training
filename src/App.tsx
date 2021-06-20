import { Component } from "react";

import "./App.scss";
import { Header, Footer } from "./components/layouts";
import { List } from "./components/modules";

interface AppState {
  page: "home" | "about";
}

class App extends Component<{}, AppState> {
  state: AppState = {
    page: "home",
  };

  render() {
    const { page } = this.state;

    return (
      <div className="app">
        <Header />
        <main className="main">
          <ul className="nav-menu">
            <li
              className={`nav-menu-item ${
                page === "home" ? "active" : ""
              }`.trim()}
              onClick={() => this.setState({ page: "home" })}
            >
              Home
            </li>
            <li
              className={`nav-menu-item ${
                page === "about" ? "active" : ""
              }`.trim()}
              onClick={() => this.setState({ page: "about" })}
            >
              About
            </li>
          </ul>
          {page === "home" && (
            // <div className="circle-section">
            //   <div className="circle-wrapper">
            //     <Circle circleSize="110" number={20} isCountdowning />
            //     <Circle circleSize="150" number={25} isCountdowning />
            //     <Circle circleSize="130" number={15} isCountdowning />
            //   </div>
            // </div>
            <List />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
