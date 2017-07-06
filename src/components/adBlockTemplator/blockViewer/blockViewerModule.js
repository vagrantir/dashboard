import * as t from '../../../store/mutation-types'

// initial state
const state = {
    id: '',
    height: '600px',
    width: '300px',
    background: '#fbfbfb',
    html: '',
    blockViewport: null,
    root: {},
    selected: {},
}

const getters = {
    state: state => state,
    height: state => state.height,
    width: state => state.width,
    selectedItem: state => {
        return state.selected
        },
    }

const actions = {
    save ({state, commit}, {target}){
        return new Promise((resolve, reject) => {
            try {
                let s = '#' + state.id + ' textarea.hl-template-html'
                console.log(s)
                let html = document.querySelector(s).value
                commit(t.HTML, {html})

                resolve(html)
            } catch (e) {
                reject(e)
            }
        })
    },
    selectItem ({state, commit}, item){
        if (state.selected.model){
            state.selected.model.classList.remove('selected-item')
        }
        commit(t.SELECT, item.id)
        if (item){
            item.model.classList.add('selected-item')
        }
    },
    initRoot ({state, commit}, rootEl){
        return new Promise((resolve, reject) => {
            try {
                console.log('root is: \n', rootEl)
                commit(t.ROOT, rootEl)
                resolve(rootEl)
            } catch (e) {
                reject(e)
            }
        })
    },
    updateRoot ({state, commit}, newRoot){
        return new Promise((resolve, reject) => {
            try {
                let r = state.root
                commit(t.ROOT, null)
                commit(t.ROOT, newRoot)
                resolve(r)
            } catch (e) {
                reject(e)
            }
        })
    },
    setHtml ({state, commit, dispatch}, html){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HTML, html)
                state.root.innerHTML = html
                dispatch('updateRoot', state.root)
                resolve(html)
            } catch (e) {
                reject(e)
            }
        })
    },
    setViewport ({commit}, viewport){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HEIGHT, viewport.height)
                commit(t.WIDTH, viewport.width)
                commit(t.BACKGROUND, viewport.background)
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    },
    setHeight ({commit}, height){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HEIGHT, height)
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    },
    setWidth ({commit}, width){
        return new Promise((resolve, reject) => {
            try {
                commit(t.WIDTH, width)
                resolve()
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
    [t.HEIGHT] (state, height) {
        state.height = height
    },
    [t.WIDTH] (state, width) {
        state.width = width
    },
    [t.BACKGROUND] (state, background) {
        state.background = background
    },
    [t.ROOT] (state, rootEl) {
        state.root = rootEl
    },
    [t.SELECT] (state, item) {
        state.selected = item
    },
    [t.HTML] (state, html) {
        state.html = html
    },
    [t.ELEMENT] (state, el) {
        state.el = el
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}