import './utils/dateUtils'
// import jQuery from 'jquery'
// import Chart from 'chart.js'
// import axios from 'axios'
// import 'bootstrap'
// import 'bootstrap/less/bootstrap.less'
// import '../src/md/css/bootstrap-material-design.css'
// import '../src/md/css/ripples.css'
import '../src/css/animate.css'
import '../src/md/js/material'
import '../src/md/js/ripples'
// import 'bootstrap-material-design'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'
import HtmlLoader from './components/adBlockTemplator/htmlLoader/htmlLoader.vue'
import PropertyEditor from './components/adBlockTemplator/propertyEditor/propertyEditor.vue'
import BlockViewer from './components/adBlockTemplator/blockViewer/blockViewer.vue'

import TreeViewItem from './components/adBlockTemplator/templateTreeView/tree-view-item.vue'

Vue.component('html-loader', HtmlLoader)
Vue.component('property-editor', PropertyEditor)
Vue.component('block-viewer', BlockViewer)
Vue.component('tree-view-item', TreeViewItem)
Vue.use(Vuex)
// Vue.use(ElementUI)

const PRODUCTION = false

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})

$.material.init()
