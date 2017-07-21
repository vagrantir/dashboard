import * as t from '../../../store/mutation-types'
import Element from './elementModule'
import store from 'vuex'

// initial state
const state = []

const getters = {
    state: state => state
}

const actions = {
    add ({commit}, {model}){
        return new Promise((resolv, reject)=>{
            try {
                commit(t.ADD, model)
            } catch (e) {
                reject(e)
            }
        })
    },
    remove ({commit, state}, el){
        return new Promise((resolv, reject)=>{
            try {
                commit(t.REMOVE, el)
            } catch (e) {
                reject(e)
            }

        })
    },
}

const mutations = {
    [t.ADD] (state, el) {
        state.push(el)
    },
    [t.REMOVE] (state, el) {
        let i = state.children.indexOf(el)
        state.splice(i,1)
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}
