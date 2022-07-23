import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  namespaced: true,

  state: {
    Instrumentos: []
  },

  getters: {
    Instrumentos(state){
        return state.Instrumentos
    }
  },

  mutations: {
    setInstrumentos(state, data){
        state.Instrumentos = data
    }
  },

  actions: {
    getInstrumentos: async function({commit}){
    const settings = {
        method: 'GET'
    }
    const url = 'http://localhost:3001/instrumentos'
    const response = await fetch(url, settings)
    const data = await response.json()
    commit('setInstrumentos', data)
    },
    searchInstrumento: async function({commit}, search){
        const settings = {
            method: 'GET'
        }
        const url = 'http://localhost:3001/instrumentos'
        const response = await fetch(url, settings)
        const data = await response.json()
        const filter = data.filter(instrumento => instrumento.nombre.toLowerCase().includes(search.toLowerCase()))
        commit('setInstrumentos', filter)
        },
    deleteInstrumento: async function({commit, dispatch}, id){
        const settings = {
            method: 'DELETE',
        }
        const url = `http://localhost:3001/instrumentos/${id}`
        const response = await fetch(url, settings)
        dispatch('getInstrumentos')
        },
    agregarInstrumento: async function({commit, dispatch}, body){
            const settings = {
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(body)
            }
            const url = `http://localhost:3001/instrumentos`
            const response = await fetch(url, settings)
            dispatch('getInstrumentos')
            },    
    editarInstrumento: async function({commit, dispatch}, body){
            const settings = {
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(body)
            }
            const url = `http://localhost:3001/instrumentos/${body.id}`
            const response = await fetch(url, settings)
            dispatch('getInstrumentos')
            }        
  },

  modules: {
 
  }
}