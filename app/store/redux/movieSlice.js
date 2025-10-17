import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [], // state awal: array kosong
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      // Reducer untuk menyimpan data hasil dari API ke state global
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
