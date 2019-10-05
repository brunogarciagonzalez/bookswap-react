import { isEmpty } from "lodash";
import { RAILS_ROOT } from "./../../uris";
import {
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM,
  UPDATE_USER,
  UPDATE_ADD_USERBOOK_FORM_ISBN,
  UPDATE_ADD_USERBOOK_FORM_BOOKDATA,
  UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION,
  UPDATE_ADD_USERBOOK_FORM_CONDITION,
  UPDATE_ADD_USERBOOK_FORM_DESCRIPTION
} from "./types";
import parseBookObj from "./helpers/parseBookObj.js";
import { makeDeepCopy, validISBN } from "./../helpers.js";

export function updateLoginForm(key, value) {
  return { type: UPDATE_LOGIN_FORM, key, value };
}
export function clearLoginForm() {
  return { type: CLEAR_LOGIN_FORM };
}

export function userLogin() {
  return function(dispatch, getState) {
    let formData = getState().loginForm;
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
        if (data.success) {
          localStorage.setItem("token", data.token);
          dispatch(updateUser(data.user));
          dispatch(clearLoginForm());
        } else if (data.status >= 500) {
          alert("The server had some trouble, please try again later.");
        } else {
          alert("Incorrect username or password.");
        }
      })
      .catch(error =>
        alert("The server had some trouble, please try again later.")
      );
  };
}

export function updateUser(user) {
  return { type: UPDATE_USER, user };
}

export function updateAddUserBookFormISBN(value) {
  return { type: UPDATE_ADD_USERBOOK_FORM_ISBN, value };
}

export function queryAddUserFormISBN() {
  return function(dispatch, getState) {
    let isbn = getState().addUserBookForm.isbn;
    if (!validISBN(isbn)) {
      return alert("Invalid ISBN.");
    }
    // if ever needed, can get cover: `http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
    let bookURL = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;

    fetch(bookURL)
      .then(r => r.json())
      .then(data => {
        if (!isEmpty(data)) {
          let book = data[`ISBN:${isbn}`];
          let parsedBook = parseBookObj(book, isbn);
          dispatch(updateAddUserBookFormBookData(parsedBook));
        } else {
          alert("Invalid ISBN.");
        }
      })
      .catch(error => alert(error));
  };
}

export function updateAddUserBookFormBookData(bookData) {
  return { type: UPDATE_ADD_USERBOOK_FORM_BOOKDATA, bookData };
}

export function updateConfirmationOfISBN(value) {
  return { type: UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION, value };
}

export function updateAddUserBookFormCondition(value) {
  return { type: UPDATE_ADD_USERBOOK_FORM_CONDITION, value };
}

export function updateAddUserBookFormDescription(value) {
  return { type: UPDATE_ADD_USERBOOK_FORM_DESCRIPTION, value };
}

export function submitAddUserBookForm() {
  return function(dispatch, getState) {
    let payload = makeDeepCopy(getState().addUserBookForm);
    delete payload.isbn;
    delete payload.isbnConfirmed;
    delete payload.bookData.authorsString;
    fetch(RAILS_ROOT + `/user_books`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        debugger;
      });
  };
}
