import * as t from '../../../store/mutation-types'

// initial state
const state = {
    id:'',
    height: '900px',
    width: '300px',
    background: '#225588',
}

const getters = {
    state: state => state,
    height: state => state.height,
    width: state => state.width,
    background: state => state.background,

}

const actions = {
    setHeight ({commit}, height){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HEIGHT, {height})
                resolve()
            } catch(e){
                reject(e)
            }
        })
    },
    setWidth ({commit}, width){
        return new Promise((resolve, reject) => {
            try {
                commit(t.WIDTH, {width})
                resolve()
            } catch(e){
                reject(e)
            }
        })
    },
    setBackground ({commit}, background){
        return new Promise((resolve, reject) => {
            try {
                commit(t.BACKGROUND, {background})
                resolve()
            } catch(e){
                reject(e)
            }
        })
    },
    setId ({commit}, {id}){
        return new Promise((resolve, reject) => {
            try {
                commit(t.ID, {id})
                resolve()
            } catch(e){
                reject(e)
            }
        })
    }
}

const mutations = {
    [t.ID] (state, { id }) {
        state.id = id
    },
    [t.HEIGHT] (state, { height }) {
        state.height = height
    },
    [t.WIDTH] (state, { width }) {
        state.width = width
    },
    [t.BACKGROUND] (state, { background }) {
        state.background = background
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}