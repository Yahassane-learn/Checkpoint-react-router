import React from "react";
import Header from './components/Header';
import MovieList from './components/MovieList';
import Trailler from './components/Trailler'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
      <Switch>
        <Route exact path="/Home" >
          <Home movie={Home} />
        </Route>
      <Route path="/MovieList" >        
        <MovieList movie={MovieList} />
      </Route>
      <Route path="/MovieProps/:id"  >        
        <Trailler movie={MovieList} />
      </Route>
      </Switch>
    </Router >
    </div >
  );
}

export default App;
