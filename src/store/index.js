import Vue from 'vue';
import Vuex from 'vuex';

// import user from './modules/user'
import global from './global';
import home from './modules/Home';

Vue.use(Vuex);

const store = new Vuex.Store({
  ...global,
  modules: {
    home
  }
});

export default store;
