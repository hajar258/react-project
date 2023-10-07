import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import Header from "./components/Header";
import AppRouter from "./components/Router";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <AppRouter />
        <Footer />
    </div>
  );
}

export default App;
