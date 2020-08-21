import axios from "axios";

export const FETCHING_COUNTRY_START = "FETCHING_COUNTRY_START";
export const FETCH_COUNTRY_SUCCESS = "FETCH_COUNTRY_SUCCESS";


export const fetchCountries = () => (dispatch) => {
    // dispatch FETCHING action
    dispatch({ type: FETCHING_COUNTRY_START });
    // make an axios call
    fetch("https://restcountries-v1.p.rapidapi.com/all", {
	method: "GET",
	headers: {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "9b311e2147mshc2d678c5c96f180p1bea52jsn8a6c0abcc767"
	}
})
.then(response => response.json())
.then(data => dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: data }))
.catch(err => {
	console.log(err);
});
  };

  const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
      next(action);
    } else if (typeof action === "function") {
      action(store.dispatch);
    }
  };