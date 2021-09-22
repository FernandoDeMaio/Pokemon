import './App.css';
import Home from "./components/Home/Home.jsx";
import { Route } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "./actions";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  });

  return (
    <div className="App">
     <Route exact path="/home" component={Home} />
     {/* <Route path="/" component={Nav} /> */}
    </div>
  );
}

export default App;
