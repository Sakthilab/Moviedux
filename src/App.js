import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import MoviesGrid from "./componenets/MoviesGrid";
import Watchlist from "./componenets/Watchlist";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useActionData,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // useState used to assigning values to the components it will rerender the components
  // when change occured, we will declare the state like below
  // 'movies' is the variable name of the state, whenever any changes occured to the vairable it gets rerenderd
  // 'setMovies' is the function used to assign the values in the components
  // '[]' inside useState calling used to set initial value for the components
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  //toggling between add and remove watchlist
  //prev will have the current state which includes the current value and we are filtering
  // based on the movied,, if the id is already there we remove it, if its not there we add themovie
  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  // useEffect is used to set values to the components using state
  // [] this is where we use to call useEffect whenever required
  useEffect(() => {
    //fetch is used to fetch data in javascript asynchronoulsy
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
