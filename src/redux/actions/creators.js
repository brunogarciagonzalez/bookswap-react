import { RAILS_ROOT } from "./../../uris";
import { UPDATE_USER, UPDATE_ADD_USERBOOK_FORM_ISBN, CHECK_ADD_USERBOOK_FORM_ISBN } from "./types";
import { parseBookObj } from "./helpers/parseBookObj.js";

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

export function updateAddUserBookFormISBN(value){
  return { type: UPDATE_ADD_USERBOOK_FORM_ISBN, value }
}

export function checkAddUserFormISBN(){
  // return {
  //   type: CHECK_ADD_USERBOOK_FORM_ISBN
  // }

  return function (dispatch, getState) {
    let isbn = getState().addUserBookForm.isbn
    // let coverUrl = `http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
    let bookURL = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
    
    fetch(bookURL)
      .then(r => r.json())
      .then(data => { 
        let book = data[`ISBN:${isbn}`];
        let parsed = parseBookObj(book, isbn);
        debugger;
       })
      .catch(error => alert(error))
  }


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
