import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--6h6hqnm2zbqs.code.run/characters"
        );
        // console.log(response.data);
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);
};

export default Characters;
