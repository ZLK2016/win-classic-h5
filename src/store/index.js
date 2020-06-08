import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proc_id_increment:1,
    openedApps:[
      // {name:'AppIE', proc_id:1},
      // {name:'AppRun', proc_id:2},
      // {name:'AppNotepad', proc_id:3},
    ],
  },
  mutations: {
    openapp(state, app){
      state.openedApps.push({name: app, proc_id: ++state.proc_id_increment});
    },
    closeapp(state, proc_id){
      state.openedApps = state.openedApps.filter(app => app.proc_id != proc_id);
    }
  },
  actions: {
  },
  modules: {
  }
})
