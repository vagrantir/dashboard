import jQuery from 'jquery'
import Chart from 'chart.js'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap-material-design/index.css'
import 'bootstrap-material-design'
import Vue from 'vue'
// import ElementUI from 'element-ui'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

// Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(App)
})
