const initialState = {
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
  activeUserBook: {}
};

export default initialState;