import logo from './logo.svg';
import './App.scss';
import { Header, Footer } from './components/layouts';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello React!</h3>
      </main>
      <Footer />
    </div>
  );
}

export default App;
