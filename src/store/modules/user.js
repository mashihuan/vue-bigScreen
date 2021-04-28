const state = {
  userInfo: {}
}

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
