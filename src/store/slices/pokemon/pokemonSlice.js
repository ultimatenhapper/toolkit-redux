import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemos: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.payload = action.payload.page;
      state.pokemons = action.payload.pokemons
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingPokemos, setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer