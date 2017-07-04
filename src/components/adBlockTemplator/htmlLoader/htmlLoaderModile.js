import * as types from '../../../store/mutation-types'

// initial state
const state = {
    id: '',
    visible: false
}

const getters = {
    state: state => state
}

const actions = {
    show ({commit}){
        commit('VISIBLE', {visible: true})
    },
    hide ({commit}){
        commit('VISIBLE', {visible: false})
    },
    setId ({commit}, {id}){
        debugger
        return new Promise((resolve, reject) => {
            try {
                commit('ID', {id})
                resolve()
            } catch(e){
                reject(e)
            }
        })
    }
}

const mutations = {
    ['ID'] (state, { id }) {
        state.id = id
    },
    ['VISIBLE'] (state, { visible }) {
        state.visible = visible
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}