/* eslint-disable no-empty-pattern */
import Vue from 'vue';
import Vuex from 'vuex';

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = 'https://blogbackend20201017194913.azurewebsites.net/api';

const store = new Vuex.Store({
  state: {
    count: 0,
    entradas: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setEntradas(state, payload) {
      state.entradas = payload;
    },
  },
  getters: {
    getEntradas(state) {
      return state.entradas;
    },
  },
  actions: {
    async cargarEntradas({ commit }) {
      const { data } = await Axios.get(`${baseUrl}/Entradas`);
      commit('setEntradas', data);
    },
    async subirEntrada({ }, entrada) {
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      const respuesta = await Axios.post(`${baseUrl}/Entradas`, entrada, config);
      console.log(respuesta);
    }
  }
});

export default store;
