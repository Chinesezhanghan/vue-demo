/**
 * Created by Administrator on 2019/10/26.
 */
import Vue from 'vue'
import Vuex from  'vuex';

Vue.use(Vuex);

const store =new Vuex.Store({

  state:{
      homelist:[],
  },
  mutations:{
    initlist(state,list){
      state.homelist=list;

    }
  }
})

export  default  store
