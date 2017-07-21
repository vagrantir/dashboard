import * as t from '../../../store/mutation-types'
import * as u from '../../../utils/types'
import * as sys from '../../../utils/system'

// initial state

export const state = (data) => {
    let model = data ? data.modelName || 'Element' : 'Element'
    let s = sys.deepAssign({
        id: 'el-' + Math.random().toString(32).substr(2),
        modelName: 'Element',
        name: 'element',
        visible: false,
        type: 'element',
        className: 'element',
        isStatic: false,
        isBlock: true,
        isHref: false,
        isRemovable: true,
        isImage: false,
        src: '',
        attributes: {
            id: 'el-' + Math.random().toString(32).substr(2),
            class: '',
            template: ``,
            styleSheet: '',
            layout: {
                width: null,
                height: null,
                borderWidth: null,
                borderStyle: null,
                borderColor: null
            },
            bgImageSrc: null,
        },
        allowedChild: {},
        children: [],
        allowedEvent: {},
        events: [],
        allowedEffects: {},
        effects: [],
    }, data)
    return s
}

const advertisingBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'advertisingBlock',
            label: "рекламный блок",
            name: "root",
            type: "root",
            isStatic: true,
            isBlock: true,
            isHref: false,
            isRemovable: false,
            allowedChild: {
                internalBlock,
                imageBlock,
                textBlock,
            },
            attributes: {
                teasersCount: 3,
                rowsCount: 1,
                layout: {
                    orientaion: 0,
                },
                template: `
                    <div :id="me.id" :class="me.class">
                    {{ teasers }}
                    </div>`,
            },
            children: [
                teasersBlock({isRemovable: false})
            ]
        }, data)
    )
}

const teasersBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'teasersBlock',
            label: "блок тизеров",
            name: "teasers",
            type: "teasers",
            isStatic: true,
            isRemovable: false,
            isBlock: true,
            isHref: false,
            allowedChild: {
                internalBlock,
                imageBlock,
                textBlock,
            },
            children: [
                teaserBlock({isRemovable: false}),
            ]
        }, data))
}

const internalBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'internalBlock',
            label: "внутренний блок",
            name: "internal-block",
            type: "internal-block",
            isRemovable: true,
            isBlock: true,
            isHref: false,
            allowedChild: {
                internalBlock,
                imageBlock,
                textBlock,
            },
        }, data))
}

const teaserBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'teaserBlock',
            label: "шаблон тизера",
            name: "teaser",
            type: "teaser",
            isRemovable: false,
            isHref: false,
            allowedChild: {
                internalBlock,
                imageBlock,
                textBlock,
            },
            children: [
                imageBlock({isRemovable: false}),
                internalBlock({
                    isRemovable: false,
                    children: [
                        textBlock({
                            name: 'title',
                            label: 'заголовок'
                        }),
                        textBlock({
                            name: 'description',
                            label: 'описание'
                        }),
                    ]
                })
            ]
        }, data))
}

const imageBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'imageBlock',
            label: "изображение",
            name: "static-image",
            type: "image",
            isRemovable: true,
            isImage: true,
            isHref: false,
        }, data))
}

const textBlock = (data) => {
    return state(
        sys.deepAssign({
            modelName: 'textBlock',
            label: "текст",
            name: "static-text",
            type: "text",
            isRemovable: true,
            isHref: false,
        }, data))
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
    create(context, elementName){
        var elements = {
            advertisingBlock,
            teasersBlock,
            internalBlock,
            teaserBlock,
            imageBlock,
            textBlock,
        }
        return new Promise((resolve, reject) => {
            try {
                if (elementName && elements[elementName]) {
                    resolve(elements[elementName]())
                } else {
                    reject(`Element ${elementName} does not exists`)
                }
            } catch (e) {
                reject(e)
            }
        })
    },
    appendChild(context, {parent, child}){
        context.commit(t.APPEND_CHILD, {parent, child})
    },
}

const mutations = {
    [t.APPEND_CHILD] (state, {parent, child}) {
        parent.children = parent.children || []
        parent.children.push(child)
    },
}

export default Element = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
