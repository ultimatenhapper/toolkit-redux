import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

function PokemonApp() {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon app</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Cargar más
      </button>
    </>
  );
}

export default PokemonApp;
