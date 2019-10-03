import { UPDATE_USER } from "./types";
import { RAILS_ROOT } from "./../../uris";

export function updateUser(user) {
  return { type: UPDATE_USER, user };
}

export function userLogin(formData) {
  return function(dispatch, getState) {
    fetch(RAILS_ROOT + "/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        debugger
        if (data.success) {
          localStorage.setItem("token", data.token);
          dispatch(updateUser(data.user));
        } else if (data.status >= 500) {
          alert("The server had some trouble, please try again later.")
        } else {
          alert("Incorrect username or password.");
        }
      })
      .catch(error =>
        alert("The server had some trouble, please try again later.")
      );
  };
}

// export function fetchPokemon() {
//   const thunk = function(dispatch, getState) {
//     fetch(pokeUrl)
//       .then(res => res.json())
//       .then(pokemons => dispatch(updatePokemon(pokemons)));
//
//     dispatch({ type: FETCH_POKEMON });
//   };
//   return thunk;
// }
