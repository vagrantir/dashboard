import * as t from '../../../store/mutation-types'

// initial state
const state = {
    id: '',
    visible: false,
    html: ''
}

const getters = {
    state: state => state
}

const actions = {
    show ({commit}){
        commit(t.VISIBLE, {visible: true})
    },
    hide ({commit}){
        commit(t.VISIBLE, {visible: false})
    },
    save ({state, commit}, {html}){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HTML, {html})
                resolve({html})
            } catch (e) {
                reject(e)
            }
        })
    },
    setId ({commit}, {id}){
        return new Promise((resolve, reject) => {
            try {
                commit(t.ID, {id})
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    }
}

const mutations = {
    [t.ID] (state, {id}) {
        state.id = id
    },
    [t.VISIBLE] (state, {visible}) {
        state.visible = visible
    },
    [t.HTML] (state, {html}) {
        state.html = html
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}