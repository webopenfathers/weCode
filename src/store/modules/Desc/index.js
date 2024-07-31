import { API } from '@/config';

const state = {
  dataList: {}
};

const getters = {};
Object.keys(state).forEach(k => {
  getters[k] = s => s[k];
});

const mutations = {
  SET_DATALIST: (state, dataList) => {
    state.dataList = dataList;
  }
};

const actions = {
  getFetchDemo: async ({ commit }) => {
    try {
      console.log('Request url:', API.getData);
      // const url = `${urls.getData}`;
      // const r = await HWH5.fetch(url).then(res => res
      //   .json()
      //   .then(d => d)
      //   .catch(e => e));
      const r = ['a', 'b', 'c'];
      commit('SET_DATALIST', r);
      return r;
    } catch (error) {
      return error;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
