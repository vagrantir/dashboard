import * as t from '../../../store/mutation-types'
import Element from './elementModule'
// initial state
const state = {
    id: '',
    height: '900px',
    width: '300px',
    background: '#225588',
    html: '',
    block: {},
    __block:    {
        label: "рекламный блок",
        name: "advertising-block",
        isStatic: true,
        isBlock: true,
        isHref: false,
        src: '',
        template:"",
        children: [
            {
                label: "внутренний блок",
                name: "internal-block",
                isStatic: true,
                isRemovable: true,
                isBlock: true,
                isHref: false,
                src: '',
                template:"",
                children:[
                    {
                        label:"изображение",
                        name:"static-image",
                        isStatic: true,
                        isRemovable: true,
                        isImage: true,
                        isHref: false,
                        src: '',
                        template:"",
                    },
                    {
                        label:"текст",
                        name:"static-text",
                        isStatic: true,
                        isRemovable: true,
                        isHref: false,
                        src: '',
                        template:"",
                    },
                ]
            },
            {
                label: "блок тизеров",
                name: "teasers-block",
                isStatic: true,
                isRemovable: false,
                isBlock: true,
                isHref: false,
                src: '',
                template:"",
                children:[
                    {
                        label: "тизер",
                        name: "teaser",
                        isStatic: false,
                        isRemovable: false,
                        isHref: false,
                        src: '',
                        template:"",
                    }
                ]
            },
        ]
    },
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
    initRoot ({state, commit}, rootEl){
        return new Promise((resolve, reject) => {
            try {
                commit(t.ROOT, rootEl)
                resolve(rootEl)
            } catch (e) {
                reject(e)
            }
        })
    },
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
        if (state.selected.model) {
            state.selected.model.classList.remove('selected-item')
        }
        commit(t.SELECT, item.id)
        if (item) {
            if (item.model.tagName == 'IMG') {
                item.model.classList.add('selected-item')
                item.model.classList.add('animated')
                item.model.classList.add('infinite')
                item.model.classList.add('flash')
            } else {
                item.model.classList.add('selected-item')
            }
        }
    },
    setBlock ({state, commit}, block){
        return new Promise((resolve, reject) => {
            try {
                commit(t.BLOCK, block)
                resolve(block)
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
    setHtml ({state, commit, dispatch}, payload){
        return new Promise((resolve, reject) => {
            try {
                commit(t.HTML, payload.html)
                state.root.appendChild(payload.el)
                dispatch('updateRoot', state.root)
                resolve(payload)
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
}

const mutations = {
    [t.BACKGROUND] (state, background) {
        state.background = background
    },
    [t.BLOCK] (state, block) {
        state.block = block
    },
    [t.ELEMENT] (state, el) {
        state.el = el
    },
    [t.HEIGHT] (state, height) {
        state.height = height
    },
    [t.HTML] (state, html) {
        state.html = html
    },
    [t.ID] (state, {id}) {
        state.id = id
    },
    [t.ROOT] (state, rootEl) {
        state.root = rootEl
    },
    [t.SELECT] (state, item) {
        state.selected = item
    },
    [t.WIDTH] (state, width) {
        state.width = width
    },
}

export default {
    namespaced: true,
    modules: {Element},
    state,
    getters,
    actions,
    mutations
}