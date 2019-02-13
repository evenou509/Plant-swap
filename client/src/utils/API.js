import axios from "axios";

export default {
//   // Gets all books
  signIn: function(data) {
    // console.log(data)
    return axios.post("/api/users/signin", data);
  },
//   // Gets the book with the given id
  getUser: function(id) {
    return axios.post("/api/users/" + id);
  },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  newUser: function(newUserData) {
    return axios.post("/api/users/register", newUserData);
  },
  // Saves plant to database
  savePlant: function(plantData) {
    return axios.post("/api/plant", plantData);
  }
};
