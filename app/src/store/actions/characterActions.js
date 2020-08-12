import axios from "axios";

export const FETCHING_CHARACTER_START = "FETCHING_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

const apiURL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = () => (dispatch) => {
    // dispatch FETCHING action
    dispatch({ type: FETCHING_CHARACTER_START });
    // make an axios call
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data);
        // dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };