import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import htmlLoader from '../components/adBlockTemplator/htmlLoader/htmlLoaderModile'
import propertyEditor from '../components/adBlockTemplator/propertyEditor/propertyEditorModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {},
    mutations,
    actions,
    getters,
    modules: { htmlLoader },
    strict: debug,
})