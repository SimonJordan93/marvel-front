import "./App.css";

// Package imports
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
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
  // Page Changes
  const [currentCharactersPage, setCurrentCharactersPage] = useState(1);
  const [currentComicsPage, setCurrentComicsPage] = useState(1);
  const limit = 100;
  // Page Searches
  const [charactersSearch, setCharactersSearch] = useState("");
  const [comicsSearch, setComicsSearch] = useState("");
  // Character Cookies
  const [characterImg, setCharacterImg] = useState(
    Cookies.get("characterImg") || null
  );
  const [characterName, setCharacterName] = useState(
    Cookies.get("characterName") || null
  );
  const [characterDesc, setCharacterDesc] = useState(
    Cookies.get("characterDesc") || null
  );

  // Comics Cookies
  const [comicsImg, setComicsImg] = useState(Cookies.get("comicsImg") || null);
  const [comicsName, setComicsName] = useState(
    Cookies.get("comicsName") || null
  );
  const [comicsDesc, setComicsDesc] = useState(
    Cookies.get("comicsDesc") || null
  );

  // Characters.js page change
  const skipCharacters = (currentCharactersPage - 1) * limit;
  const handleCharactersPageDecrease = () => {
    setCurrentCharactersPage(currentCharactersPage - 1);
  };
  const handleCharactersPageIncrease = () => {
    setCurrentCharactersPage(currentCharactersPage + 1);
  };

  // Comics.js page change
  const skipComics = (currentComicsPage - 1) * limit;
  const handleComicsPageDecrease = () => {
    setCurrentComicsPage(currentComicsPage - 1);
  };
  const handleComicsPageIncrease = () => {
    setCurrentComicsPage(currentComicsPage + 1);
  };

  // Fetch data for characters and comics
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--6h6hqnm2zbqs.code.run/characters?name=${charactersSearch}&skip=${skipCharacters}`
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
          `https://site--marvel-back--6h6hqnm2zbqs.code.run/comics?title=${comicsSearch}&skip=${skipComics}`
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
    window.scrollTo({ top: 0, left: 0 });
  }, [
    skipCharacters,
    skipComics,
    currentCharactersPage,
    charactersSearch,
    comicsSearch,
  ]);

  const handleCharacterLike = (
    chararcterImg,
    chararcterName,
    chararcterDesc
  ) => {
    if (characterImg && characterName && characterDesc) {
      setCharacterImg(chararcterImg);
      setCharacterName(chararcterName);
      setCharacterDesc(chararcterDesc);
      Cookies.set("characterImg", characterImg, { expires: 30 });
      Cookies.set("characterName", characterName, { expires: 30 });
      Cookies.set("characterDesc", characterDesc, { expires: 30 });
    } else {
      setCharacterImg(null);
      setCharacterName(null);
      setCharacterDesc(null);
      Cookies.remove("characterImg");
      Cookies.remove("characterName");
      Cookies.remove("characterDesc");
    }
  };

  const handleComicsLike = (chomicsImg, chomicsName, chomicsDesc) => {
    if (comicsImg && comicsName && comicsDesc) {
      setComicsImg(chomicsImg);
      setComicsName(chomicsName);
      setComicsDesc(chomicsDesc);
      Cookies.set("comicsImg", comicsImg, { expires: 30 });
      Cookies.set("comicsName", comicsName, { expires: 30 });
      Cookies.set("comicsDesc", comicsDesc, { expires: 30 });
    } else {
      setComicsImg(null);
      setComicsName(null);
      setComicsDesc(null);
      Cookies.remove("comicsImg");
      Cookies.remove("comicsName");
      Cookies.remove("comicsDesc");
    }
  };

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
                setCharactersSearch={setCharactersSearch}
                setComicsSearch={setComicsSearch}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters
                characters={characters}
                isLoading={isLoading}
                handleCharactersPageDecrease={handleCharactersPageDecrease}
                handleCharactersPageIncrease={handleCharactersPageIncrease}
                currentCharactersPage={currentCharactersPage}
                setCurrentCharactersPage={setCurrentCharactersPage}
                charactersSearch={charactersSearch}
                setCharactersSearch={setCharactersSearch}
                handleCharacterLike={handleCharacterLike}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics
                comics={comics}
                isLoading={isLoading}
                handleComicsPageDecrease={handleComicsPageDecrease}
                handleComicsPageIncrease={handleComicsPageIncrease}
                currentComicsPage={currentComicsPage}
                setCurrentComicsPage={setCurrentComicsPage}
                comicsSearch={comicsSearch}
                setComicsSearch={setComicsSearch}
                handleComicsLike={handleComicsLike}
              />
            }
          />
          <Route
            path="/character/:id"
            element={
              <Character
                characters={characters}
                comics={comics}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                characterImg={characterImg}
                characterName={characterName}
                characterDesc={characterDesc}
                comicsImg={comicsImg}
                comicsName={comicsName}
                comicsDesc={comicsDesc}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
