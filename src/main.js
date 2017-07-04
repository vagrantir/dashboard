import './utils/dateUtils'
import jQuery from 'jquery'
import Chart from 'chart.js'
import axios from 'axios'
// import 'element-ui/lib/theme-default/index.css'
import 'bootstrap'
// import 'bootstrap/less/bootstrap.less'
import '../src/md/css/bootstrap-material-design.css'
import '../src/md/css/ripples.css'
import '../src/md/js/material'
import '../src/md/js/ripples'
// import 'bootstrap-material-design'
import Vue from 'vue'
// import ElementUI from 'element-ui'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'

Vue.use(Vuex)
// Vue.use(ElementUI)

const PRODUCTION = false

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})

$.material.init()
