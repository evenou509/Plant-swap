import axios from "axios";

export default {
//   // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
//   // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  newUser: function(newUserData) {
    return axios.post("/api", newUserData);
  },
  // Saves plant to database
  savePlant: function(plantData) {
    return axios.post("/api", plantData);
  }
};
