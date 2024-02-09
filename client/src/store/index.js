import { createStore } from 'vuex';

export default createStore({
  state: {
    _isAuth: false,
    _user: {a: 123}
  },
  getters: {
    getIsAuth(state){
      return state._isAuth
    },
    getUser(state){
      return state._user
    }
  },
  mutations: {
    setIsAuth(state, bool){
      state._isAuth = bool
    },
    setUser(state, user){
      state._user = user
    },
  },
  actions: {

  },
  modules: {

  },
});
