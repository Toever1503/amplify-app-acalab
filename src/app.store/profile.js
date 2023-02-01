export default {
  namespaced: true,
  // data
  state: {
    profileTab: "ProfileCourseWorkView",
  },
  // computed
  getters: {},
  // method
  // 변이라 스테이트의 데이터 수겅 가능
  mutations: {
    changeCurrentTab(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.profileTab = payload.tabName;
    },
  },
  // 비동기
  actions: {},
};
