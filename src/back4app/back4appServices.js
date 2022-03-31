// const CryptoJS = require("crypto-js");
const Parse = require("parse/node");
Parse.initialize(
  "BTHHyHlnT3iTQIeNya8Ww3wM9TzQf3xzikgyIl20",
  "teKAjFIWFjET2PAkiqGsdjUOcAHcR677BUt8Ms3M"
);
Parse.serverURL = "https://parseapi.back4app.com";

let back4app = {};
// Create a new User || Signup function
back4app.Signup = async (signupModel) => {
  let user = new Parse.Object("Signup");
  if (signupModel.username !== "" && signupModel.password !== "") {
    user.save({
      username: signupModel.username,
      email: signupModel.email,
      password: signupModel.password,
    });
  } else {
    alert("Field is required");
  }

  try {
    if (signupModel.username !== "" && signupModel.password !== "") {
      user = await user.save();
      alert(
        `Your account is created successfully: ${user.id}, ${user.get(
          "username"
        )}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};

// Login function
back4app.Login = async (username, password) => {
  let Login = Parse.Object.extend("Signup");
  let query = new Parse.Query(Login);
  query.equalTo("username", username);
  query.equalTo("password", password);
  let response = await query.find();
  if (response.length > 0) {
    alert("You are logged In");
    // back4app.getUser(username)
    localStorage.setItem('userInfo',JSON.stringify(username))

  } else {
    alert("Envalid username or password");
  }
};

// Get userInfo
back4app.getUser = async () => {
let user = Parse.Object.extend('Signup')
let userQuery = new Parse.Query(user)
userQuery.equalTo('username','akhlak')
userQuery.include('eamil')

let result = await userQuery.find()

for (let i=0; i<result.length; i++){
  let data = result[i]
  // console.log(data.get('username'),data.get('email'),data.get('password'))
  let userInfo = data.get('username') + ' ' + data.get('email')
localStorage.setItem('userInfo',JSON.stringify(userInfo))
  return userInfo
}
};

export default back4app;
