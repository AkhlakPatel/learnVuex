
import back4app from "../../back4app/back4appServices";

const state = {
    status:'',
    all: {}
};
const getters = {
  //  users: state => state.all
};
const actions = {
 async signup({  commit }, user) {
    commit("SignupRequest", user);
    back4app.Signup(user).then(
      (user) => {
        commit("SignupSuccess", user);
      },
      (error) => {
        console.log('error',error)
      }
    );
  },
  async login({ commit }, {username , password}){
    commit("LoginRequest", {username});
    back4app.Login(username,password)
     .then(user => {
       commit("LoginSuccess",user)
     },
     error => {
       commit('Loginfailure',error)
     }
     )
  },
  //get user
  getAll({ commit }) {
    commit('getAllRequest');

   back4app.getUser()
        .then(
            users => commit('getAllSuccess', users),
            error => commit('getAllFailure', error)
        );
},
};
const mutations = {
//   setEmployee: (state, employee) => (state.employee = employee),
SignupRequest(state) {
    state.status = { registering: true };
  },
  SignupSuccess(state) {
    state.status = {};
},
LoginRequest(state,user){
  state.status = { loggingIn:true}
  state.user = user;
},
LoginSuccess(state,user){
  state.state = { loggedIn: true}
  state.user = user;
},
LoginFailure(state){
state.state = {}
state.user = null
},
//
getAllRequest(state) {
  state.all = { loading: true };
},
getAllSuccess(state, users) {
  state.all = {  users };
},
getAllFailure(state, error) {
  state.all = { error };
},
};

export default {
  state,
  getters,
  actions,
  mutations,
};
