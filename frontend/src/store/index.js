import { createStore } from 'vuex';

const store =  createStore({
  state: {
    total: 0
  },
  getters: {
    getTotal: (state) => state.total
  },
  actions: {

  },
  mutations: {
    setTotal: (state, value) => (state.total = value)
  }
})

export default store