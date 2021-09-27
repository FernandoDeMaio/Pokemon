import './App.css';
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Detail.jsx";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "./actions";
import Navbar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage'
import Forms from './components/Forms/Forms';



function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  },[]);
  

  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/">
      <Navbar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/pokeDetail/:id" component={Details} />
      <Route exact path="/Forms" component={Forms} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

