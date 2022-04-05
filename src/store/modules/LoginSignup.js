import back4app from "../../back4app/back4appServices";

const state = {
  all: "",
  status: "",
};
const getters = {
  //  users: state => state.all
  userInfo: (state) => state.all,
};
const actions = {
  //function for signup
  async signup({ commit }, user) {
    commit("SignupRequest", user);
    back4app.Signup(user).then(
      (user) => {
        commit("SignupSuccess", user);
      },
      (error) => {
        console.log("error", error);
      }
    );
  },

  // function for login 
  async login({ commit }, { username, password }) {
    commit("LoginRequest", { username });
    back4app.Login(username, password).then(
      (user) => {
        commit("LoginSuccess", user);
      },
      (error) => {
        commit("Loginfailure", error);
      }
    );
  },
  //get user information from b4a 
  getAll({ commit }) {
    commit("getAllRequest");
    back4app.getAllData().then(
      (users) => commit("getAllSuccess", users),
      (error) => commit("getAllFailure", error)
      );
    },
   
  //update user
  async update({ commit }, user) {
    back4app.updateUser(user).then(
      (user) => {
        commit("updateSuccess", user);
      },
      (error) => {
        console.log("error", error);
      }
    );
    },
  //delete user
  delele({ commit }){
    // commit('deleteRequest')
    back4app.deleteUser().then(
      users=> commit('deleteSuccess',users),
      err=> commit('deleteFailure',{err:err.toString()})
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
  LoginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  LoginSuccess(state, user) {
    state.state = { loggedIn: true };
    state.user = user;
  },
  LoginFailure(state) {
    state.state = {};
    state.user = null;
  },
  //
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, users) {
    state.all = { items: users };
  },
  // getAllSuccess: (state, users) => (state.all = users),
  getAllFailure(state, error) {
    state.all = { error };
  },
  updateSuccess(){
    // state.all = { items : users}
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
