import { isEmpty } from "lodash";
import { RAILS_ROOT } from "./../../URIs.js";
import {
  UPDATE_REDIRECT_TO,
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM,
  UPDATE_USER,
  UPDATE_ADD_USERBOOK_FORM_ISBN,
  UPDATE_ADD_USERBOOK_FORM_BOOKDATA,
  UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION,
  UPDATE_ADD_USERBOOK_FORM_CONDITION,
  UPDATE_ADD_USERBOOK_FORM_DESCRIPTION,
  CLEAR_ADD_USERBOOK_FORM,
  UPDATE_SELECTED_USERBOOK,
  CLEAR_SELECTED_USERBOOK,
  UPDATE_BOOKS,
  CLEAR_BOOKS
} from "./types";
import { makeDeepCopy, validISBN, parseBookObj } from "./../helpers.js";

export function updateRedirectTo(redirectTo) {
  return { type: UPDATE_REDIRECT_TO, redirectTo };
}

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
      .catch(error =>
        alert(
          "We may not be able to add this book. The OpenLibrary API may be missing some key information that we need about this book: \n" +
            error
        )
      );
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
export function clearAddUserBookForm() {
  return { type: CLEAR_ADD_USERBOOK_FORM };
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
        if (data.success) {
          dispatch(updateSelectedUserBook(data.user_book));
          dispatch(clearAddUserBookForm());
          dispatch(updateRedirectTo(`/user-books/${data.user_book.id}`));
        } else {
          alert("error @ submitAddUserBookForm()");
        }
      })
      .catch(error =>
        alert("The server had some trouble, please try again later.")
      );
  };
}

export function updateSelectedUserBook(userBook) {
  return { type: UPDATE_SELECTED_USERBOOK, userBook };
}

export function clearSelectedUserBook(userBook) {
  return { type: CLEAR_SELECTED_USERBOOK };
}

export function fetchBooks() {
  return function(dispatch, getState) {
    // fetch books
    fetch(RAILS_ROOT + "/books/actives_only")
      .then(res => res.json())
      .then(booksArray => {
        dispatch(updateBooks(booksArray));
      })
      .catch(error =>
        alert("The server had some trouble, please try again later.")
      );
  };
}

export function updateBooks(books) {
  return { type: UPDATE_BOOKS, books };
}

export function clearBooks() {
  return { type: CLEAR_BOOKS };
}

export function fetchAndSelectUserBook(id) {
  return function(dispatch, getState) {
    fetch(RAILS_ROOT + `/user_books/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(updateSelectedUserBook(data.user_book));
        } else {
          dispatch(updateSelectedUserBook({ 404: true }));
        }
      })
      .catch(error =>
        alert("The server had some trouble, please try again later.")
      );
  };
}
