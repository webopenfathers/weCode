const state = {
  homeInfo: {}
};

const getters = {};
Object.keys(state).forEach(k => {
  getters[k] = s => s[k];
});

const mutations = {
  SET_HOME_INFO: (State, homeInfo) => {
    State.homeInfo = homeInfo;
  }
};

const actions = {
  getHomeInfo: async ({ commit }) => {
    try {
      const response = await new Promise(resolve => {
        /* 模拟异步操作成功，这样可以通过fetch调接口获取数据 */
        setTimeout(() => {
          resolve({
            title: 'React App'
          });
        }, 1000);
      });
      commit('SET_HOME_INFO', response);
      return response;
    } catch (error) {
      console.log('error: ', error);
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
