const initialState = {
  redirectTo: null,
  loginForm: {
    username: "",
    password: ""
  },
  user: {},
  addUserBookForm: {
    isbn: "",
    bookData: {},
    isbnConfirmed: false,
    condition: "Used - Very Good",
    description: "",
    images: []
  },
  selectedUserBook: {},
  books: []
};

export default initialState;
