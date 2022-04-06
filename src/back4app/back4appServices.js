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
    localStorage.setItem('userLogin',JSON.stringify(username))

  } else {
    alert("Envalid username or password");
  }
};

// Get userInfo
back4app.getUser = async (id) => {
  console.log(id)
let user = Parse.Object.extend('Signup')
let userQuery = new Parse.Query(user)
// let username = JSON.parse(localStorage.getItem('userLogin'))
let objectId = id
userQuery.equalTo('objectId',`${objectId}`)
userQuery.include('email')

let result = await userQuery.find()

for (let i=0; i<result.length; i++){
  let data = result[i]
  // console.log(data.get('username'),data.get('email'),data.get('password'))
  let userInfo = {username : data.get('username') + ' ' , email:data.get('email')}
localStorage.setItem('userInfo',JSON.stringify(userInfo))
  return userInfo
}
};

//update user (readthendelete)
back4app.updateUser = async (updateModel) => {
//  console.log(updateModel)
  var Signup = Parse.Object.extend("Signup");
  let query = new Parse.Query(Signup)
  // let username = JSON.parse(localStorage.getItem('userLogin'))
  let id = updateModel.id
  console.log(id)
  query.equalTo("objectId",id);
  query.first().then(function (user) {
    if (user) {
      console.log('User found with name: ' + user.get("username") + ' and email: ' + user.get("email"));
      back4app.update(user,updateModel);
    } else {
      console.log("Nothing found, please try again");
    }
  }).catch(function (error) {
    console.log("Error: " + error.code + " " + error.message);
  });
}
//update function
back4app.update = async (user,updateModel) => {
  let username = updateModel.username;
  let email = updateModel.email;
  user.set('username', username);
  user.set('email', email);

  user.save().then(function (user) {
    console.log('user updated! Name: ' + user.get("username") + ' and new email: ' + user.get("email"));
    localStorage.setItem('userLogin',JSON.stringify(username))
  }).catch(function(error) {
    console.log('Error: ' + error.message);
  });
}
//delete user (readthendelete)
back4app.deleteUser=(id )=>{
  let Signup = Parse.Object.extend('Signup')
  let query = new Parse.Query(Signup)
  // let username = JSON.parse(localStorage.getItem('userLogin'))
  let objectId = id;
  query.equalTo('objectId',objectId)
  query.first().then(function (user){
    if(user){
      console.log('User found : ' + user.get('username'))
      back4app.delete(user)
    } else {
      console.log('Nothing Found , please try again')
    }
  }).catch(function (err){
    console.log('Error:' + err.code + err.message)
    return null
  })
}
//delete function
back4app.delete=(foundUser)=>{
  foundUser.destroy().then(function (response){
    if(response){
    console.log('User' + foundUser.get('username') + ' : Erased successfully')
    }
  }).catch((function(err){
    console.log('Error:' + err.message)
  }))
}

//fucntion for getting all data from class
back4app.getAllData=async()=>{
  const signup = Parse.Object.extend('Signup')
  let query = new Parse.Query(signup)
 let res =  await query.find()
 let data = []
 for(let i=0;i<res.length;i++)
 {
   let obj = res[i]
   let username = obj.get('username')
   let email = obj.get('email')
  //  let uid = JSON.parse(JSON.stringify(res))
  //  let uid1 =  uid[i].objectId
   let id = obj.id
   data.push({username,email,id})
   
  }
  return data;  
}
export default back4app;
