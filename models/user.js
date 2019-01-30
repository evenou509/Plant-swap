const mySql =  require("mysql");

const UserSchema = new Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  zipCode: { type: String, required: true },
  about: String
});

const User = 

module.exports = User;
