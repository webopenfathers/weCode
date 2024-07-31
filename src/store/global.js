const state = {
  deviceInfo: {}
};

const getters = {};
Object.keys(state).forEach(k => {
  getters[k] = s => s[k];
});

const mutations = {
  SET_DEVICE_INFO: (state, deviceInfo) => {
    state.deviceInfo = deviceInfo;
  }
};

const actions = {
  getDeviceInfo: async ({ commit }) => {
    try {
      const response = await window.HWH5.getDeviceInfo().then(data => data);
      commit('SET_DEVICE_INFO', response);
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
