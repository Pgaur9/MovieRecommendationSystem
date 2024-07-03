const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=57bb01748f78100741a8131f3044aa0a&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=57bb01748f78100741a8131f3044aa0a&query="';

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.result);
}
// Get initial movies
getMovies(API_URL);
