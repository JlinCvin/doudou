const state = {
  user : ''
}

const actions = {

}

const mutations = {
  USER_INFO(state , payload){
    state.user = payload.user
  }

}

export default {
  namespaced : true,
  state,
  actions,
  mutations
}