import './App.css';
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Detail.jsx";
import { Route } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "./actions";
import Navbar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  });

  return (
    <div className="App">
      
      <Route path="/" component={Navbar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/pokeDetail/:id" component={Details} />
      {/* <Route path="/pokeDetail/?" component={Details} /> */}
     {/* <Route path="/" component={Nav} /> */}
    </div>
  );
}

export default App;
