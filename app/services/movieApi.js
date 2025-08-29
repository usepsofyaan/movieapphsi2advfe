import apiClient from "./apiClient";

export const getMovies = async () => {
  const { data } = await apiClient.get("/movies");
  return data;
};

export const addMovie = async (movie) => {
  const { data } = await apiClient.post("/movies", movie);
  return data;
};

export const updateMovie = async (id, movie) => {
  const { data } = await apiClient.put(`/movies/${id}`, movie);
  return data;
};

export const deleteMovie = async (id) => {
  await apiClient.delete(`/movies/${id}`);
  return id;
};
