import "./App.css";

// Package imports
import { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Favorite from "./pages/Favorite/Favorite";

// Main App function
function App() {
  const [characters, setCharacters] = useState();
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/characters"
        );
        setCharacters(response.data);
        // console.log(characters);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComics = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/comics"
        );
        setComics(response.data);
        // console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
    fetchComics();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                characters={characters}
                comics={comics}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters characters={characters} isLoading={isLoading} />
            }
          />
          <Route
            path="/comics"
            element={<Comics comics={comics} isLoading={isLoading} />}
          />
          <Route
            path="/character/:id"
            element={
              <Character
                characters={characters}
                comics={comics}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
