import axios from 'axios';

const API_KEY = '23b29489e8683674f60bf34658264370';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    language: 'en-US',
    api_key: API_KEY
  };

  export const fetchTrendingMovie = () => {
    axios.get('/trending/movie/week')
  }