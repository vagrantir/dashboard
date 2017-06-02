import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui'
import $ from 'jquery'
import Chart from 'chart.js'
import axios from 'axios'

'use strict';
window.Vue = Vue;

window.Vuex = Vuex;

Vue.use(Vuex)

/**
 *  Для продакшена функции генераторы заполняют шаблоны нулями,
 *  чтобы при загрузке страница не выглядела как г-но
 * @type {boolean}
 */
const PRODUCTION = false

Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
// Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
// January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
// Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
            - 3 + (week1.getDay() + 6) % 7) / 7);
}
Date.prototype.getWeekYear = function () {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
}
Date.prototype.getLastMonthDay = function (monthShift) {
    var y = this.getFullYear()
    var m = this.getMonth()
    monthShift = isNaN(monthShift) ? 0 : monthShift
    return (new Date(y, m + monthShift, 0)).getDate()
}

const NOW = new Date()
const WEEK_DAY = NOW.getDay()
const CURRENT_DAY = NOW.getDate()
const CURRENT_WEEK = NOW.getWeek()
const CURR_MONTH_LAST_DAY = NOW.getLastMonthDay()
const LAST_MONTH_LAST_DAY = NOW.getLastMonthDay(-1)

function log(data) {
    console.log(data)
}

function generateStatItem(inProduction) {
    var clickCost = (Math.random()).toFixed(4)
    var id = inProduction ? 0 : (Math.random() * 100000).toFixed(0)
    var views = inProduction ? 0 : (Math.random() * 1000).toFixed(0)
    var clicks = inProduction ? 0 : (Math.random() * 100).toFixed(0)
    var money = inProduction ? 0 : (clicks * clickCost * (Math.random()).toFixed(2))
    var conversions = inProduction ? 0 : (Math.random() * 10).toFixed(0)
    return {
        id: id,
        views: views,
        clicks: clicks,
        ctr: inProduction ? 0 : (clicks * 100 / views).toFixed(2),
        cpm: inProduction ? 0 : (money / clicks).toFixed(4),
        money: money.toFixed(4),
        conversions: conversions
    }
}

function generateNumberArray(count, n, p) {
    var result = [];

    n = n >= 0 ? n : 5
    p = p >= 0 ? p : 2
    n = Math.pow(10, n);
    count = count ? count : 5

    for (var i = 0; i < count; i++) {
        result[i] = Number((Math.random() * n).toFixed(p))
    }
    return result;
}

function generateIntegerSeriesArray(from, to) {
    var result = [];

    for (var i = from; i <= to; i++) {
        result[i - 1] = i
    }
    return result;
}

function repeatValue(value, n) {
    n = n ? n : 0
    var result = []
    for (var i = 0; i < n; i++) {
        result[i] = value
    }
    return result
}

const store = new Vuex.Store({
    state: {
        count: 0,
        dashboard: {
            periods: {
                active: {},
                items: [
                    {itemId: 'dailyData', label: 'День'},
                    {itemId: 'weeklyData', label: 'Неделю'},
                    {itemId: 'monthlyData', label: 'Месяц'},
                ],
            },
            statisticsKinds: {
                active: {},
                items: [
                    {itemId: 'best', label: 'Лучшие'},
                    {itemId: 'worse', label: 'Худшие'},
                ]
            },
            statisticsContext: {
                active: {},
                items: [
                    {itemId: 'teasers', label: 'Тизеры'},
                    {itemId: 'campaigns', label: 'Кампании'},
                    {itemId: 'sites', label: 'Сайты'},
                ]
            },
            data: {
                curr: generateStatItem(PRODUCTION),
                prev: generateStatItem(PRODUCTION),
                chartLeftData: [
                    {},
                ],
                chartRightData: [
                    {},
                ],
                detailed: {
                    best: {
                        items: [
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                        ]
                    },
                    worse: {
                        items: [
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                            generateStatItem(PRODUCTION),
                        ]
                    },
                },
            },
        },
        dailyData: {
            kpis: {
                curr: generateStatItem(PRODUCTION),
                prev: generateStatItem(PRODUCTION),
            },
            charts: {
                left: {
                    type: 'bar',
                    data: {
                        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                        datasets: [
                            {
                                label: 'Показы эта неделя ',
                                data: generateNumberArray(WEEK_DAY, 3, 0),
                                backgroundColor: repeatValue('rgba(255, 99, 132, 0.1)', WEEK_DAY),
                                borderColor: repeatValue('rgba(255,99,132,0.5)', WEEK_DAY),
                                borderWidth: 1
                            },
                            {
                                label: 'Показы прошлая неделя',
                                data: generateNumberArray(7, 3, 0),
                                backgroundColor: repeatValue('rgba(54, 162, 235, 0.1)', 7),
                                borderColor: repeatValue('rgba(54, 162, 235, 0.5)', 7),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы эта неделя ',
                                data: generateNumberArray(WEEK_DAY, 1, 0),
                                backgroundColor: repeatValue('rgba(99, 132, 255, 0.1)', WEEK_DAY),
                                borderColor: repeatValue('rgba(99, 132, 255, 0.5)', WEEK_DAY),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы прошлая неделя',
                                data: generateNumberArray(7, 2, 0),
                                backgroundColor: repeatValue('rgba(162, 235, 54, 0.1)', 7),
                                borderColor: repeatValue('rgba(162, 235, 54, 0.5)', 7),
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
// display: true,
// text: 'Показы'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
                right: {
                    type: 'line',
                    data: {
                        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                        datasets: [
                            {
                                label: '% CTR',
                                data: generateNumberArray(7, 2, 2),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,0.5)',
                                ],
                                borderWidth: 1,
                                scales: {
                                    yAxes: {
                                        id: '%'
                                    },
                                },
                            },
                            {
                                label: 'Конверсии',
                                data: generateNumberArray(7, 1, 0),
                                backgroundColor: [
                                    'rgba(54, 235, 162, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 235, 162, 0.5)',
                                ],
                                borderWidth: 1,
                            },
                            {
                                label: 'CPM',
                                data: generateNumberArray(7, 1, 2),
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 0.5)',
                                ],
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Прошлая неделя'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
            },
            detailed: {
                best: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
                worse: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
            },
        },
        weeklyData: {
            kpis: {
                curr: generateStatItem(PRODUCTION),
                prev: generateStatItem(PRODUCTION),
            },
            charts: {
                left: {
                    type: 'bar',
                    data: {
                        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                        datasets: [
                            {
                                label: 'Показы эта неделя ',
                                data: generateNumberArray(WEEK_DAY, 3, 0),
                                backgroundColor: repeatValue('rgba(255, 99, 132, 0.1)', WEEK_DAY),
                                borderColor: repeatValue('rgba(255,99,132,0.5)', WEEK_DAY),
                                borderWidth: 1
                            },
                            {
                                label: 'Показы прошлая неделя',
                                data: generateNumberArray(7, 3, 0),
                                backgroundColor: repeatValue('rgba(54, 162, 235, 0.1)', 7),
                                borderColor: repeatValue('rgba(54, 162, 235, 0.5)', 7),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы эта неделя ',
                                data: generateNumberArray(WEEK_DAY, 1, 0),
                                backgroundColor: repeatValue('rgba(99, 132, 255, 0.1)', WEEK_DAY),
                                borderColor: repeatValue('rgba(99, 132, 255, 0.5)', WEEK_DAY),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы прошлая неделя',
                                data: generateNumberArray(7, 2, 0),
                                backgroundColor: repeatValue('rgba(162, 235, 54, 0.1)', 7),
                                borderColor: repeatValue('rgba(162, 235, 54, 0.5)', 7),
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
// display: true,
// text: 'Показы'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
                right: {
                    type: 'line',
                    data: {
                        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                        datasets: [
                            {
                                label: '% CTR',
                                data: generateNumberArray(7, 2, 2),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,0.5)',
                                ],
                                borderWidth: 1,
                                scales: {
                                    yAxes: {
                                        id: '%'
                                    },
                                },
                            },
                            {
                                label: 'Конверсии',
                                data: generateNumberArray(7, 1, 0),
                                backgroundColor: [
                                    'rgba(54, 235, 162, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 235, 162, 0.5)',
                                ],
                                borderWidth: 1,
                            },
                            {
                                label: 'CPM',
                                data: generateNumberArray(7, 1, 2),
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 0.5)',
                                ],
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Прошлая неделя'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
            },
            detailed: {
                best: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
                worse: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
            },
        },
        monthlyData: {
            kpis: {
                curr: generateStatItem(PRODUCTION),
                prev: generateStatItem(PRODUCTION),
            },
            charts: {
                left: {
                    type: 'bar',
                    data: {
                        labels: generateIntegerSeriesArray(1, 31),
                        datasets: [
                            {
                                label: 'Показы этот месяц',
                                data: generateNumberArray(CURRENT_DAY, 3, 0),
                                backgroundColor: repeatValue('rgba(255, 99, 132, 0.1)', CURRENT_DAY),
                                borderColor: repeatValue('rgba(255,99,132,0.5)', CURRENT_DAY),
                                borderWidth: 1
                            },
                            {
                                label: 'Показы прошлый месяц',
                                data: generateNumberArray(LAST_MONTH_LAST_DAY, 3, 0),
                                backgroundColor: repeatValue('rgba(54, 162, 235, 0.1)', LAST_MONTH_LAST_DAY),
                                borderColor: repeatValue('rgba(54, 162, 235, 0.5)', LAST_MONTH_LAST_DAY),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы этот месяц',
                                data: generateNumberArray(CURRENT_DAY, 2, 0),
                                backgroundColor: repeatValue('rgba(99, 132, 255, 0.1)', CURR_MONTH_LAST_DAY),
                                borderColor: repeatValue('rgba(99, 132, 255, 0.5)', CURR_MONTH_LAST_DAY),
                                borderWidth: 1
                            },
                            {
                                type: 'line',
                                label: 'Переходы прошлий месяц',
                                data: generateNumberArray(LAST_MONTH_LAST_DAY, 2, 0),
                                backgroundColor: repeatValue('rgba(162, 235, 54, 0.1)', LAST_MONTH_LAST_DAY),
                                borderColor: repeatValue('rgba(162, 235, 54, 0.5)', LAST_MONTH_LAST_DAY),
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
// display: true,
// text: 'Показы'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
                right: {
                    type: 'line',
                    data: {
                        labels: generateIntegerSeriesArray(1, 31),
                        datasets: [
                            {
                                label: '% CTR',
                                data: generateNumberArray(CURRENT_DAY, 2, 2),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,0.5)',
                                ],
                                borderWidth: 1,
                                scales: {
                                    yAxes: {
                                        id: '%'
                                    },
                                },
                            },
                            {
                                label: 'Конверсии',
                                data: generateNumberArray(CURRENT_DAY, 1, 0),
                                backgroundColor: [
                                    'rgba(54, 235, 162, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 235, 162, 0.5)',
                                ],
                                borderWidth: 1,
                            },
                            {
                                label: 'CPM',
                                data: generateNumberArray(CURRENT_DAY, 1, 2),
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.1)',
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 0.5)',
                                ],
                                borderWidth: 1
                            },
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Текущий месяц'
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                },
                            ],
                        }
                    }
                },
            },
            detailed: {
                best: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
                worse: {
                    items: [
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                        generateStatItem(PRODUCTION),
                    ]
                },
            },
        },
    },
    mutations: {
        increment(state) {
            return state.count++
        },
        setPeriod(state, value){
            state.dashboard.periods.active = value
        },
        setKind(state, value){
            state.dashboard.statisticsKinds.active = value
        },
        setContext(state, value){
            state.dashboard.statisticsContext.active = value
        },

    },
    actions: {
        getDashboardData(context) {
            log('Data loading ...')
            var config = {
                headers: {
                    'Auth-Token': 123,
                    'Accept': 'application/x-www-form-urlencoded',
                },
                method: 'get'
            };
            axios.get(
                'http://alpha.recreativ.ru/api/advertiser/dashboards',
                {
                    withCredentials: true,
                    headers: {
                        'Auth-Token': 123
                    },
                    params: {
                        'XDEBUG_SESSION_START': 'PHPSTORM'
                    },
                })
                .then((response) => {
                    log('Data loaded')
                    log(response)
                    if (response.data.data) {
                        context.dispatch('loadState', response.data.data)
                    } else {
                        throw 'A "data" property not exists in response!'
                    }
                })
                .catch(() => {
                    log('Data load failed')
                    log(arguments)
                })
        },
        loadState(data){
//
        },
        setPeriod(context, value){
            return new Promise((resolv, reject) => {
                context.commit('setPeriod', value)
                resolv()
            })
        },
        setKind(context, value){
            return new Promise((resolv, reject) => {
                context.commit('setKind', value)
                resolv()
            })
        },
        setContext(context, value){
            return new Promise((resolv, reject) => {
                context.commit('setContext', value)
                resolv()
            })
        },
    },
    getters: {
        activePeriod(state){
            return state.dashboard.periods.active.itemId ? state.dashboard.periods.active : state.dashboard.periods.items[0]
        },
        activeKind(state){
            return state.dashboard.statisticsKinds.active.itemId ?
                state.dashboard.statisticsKinds.active : state.dashboard.statisticsKinds.items[0]
        },
        activeContext(state){
            return state.dashboard.statisticsContext.active.itemId ?
                state.dashboard.statisticsContext.active : state.dashboard.statisticsContext.items[0]
        },
    }
})

/**
 * Вуй инстанс для обмена сообщениями между разными компонентами
 */
var EventBus = new Vue();

const KpiWidget = Vue.component('kpi-widget', {
    props: ['classes', 'kpis', 'chartsData'],
    data: function () {
        return {
            protected: {
                id: 0,
            },
        }
    },
    computed: {
        cssId() {
            return "kpi-widget-" + this.protected.id
        },
        curr() {
            return this.kpis.curr
        },
        prev() {
            return this.kpis.prev
        },
        charts(){
            return this.chartsData
        },
    },
    mounted() {
        this.protected.id = this.$root.newId()
        log('Mounted ' + this.cssId)
    },
    methods: {},
    template: '#tpl-kpi-widget',
    updated(){
        log('KpiWidget are updated')
    }
});

const TableStatistics = Vue.component(
    'table-statistics',
    {
        template: '#tpl-table-statistics',
        props: ['classes', 'id', 'table-data'],
        data(){
            return {}
        },
        computed: {
            items() {
                return this.tableData.items
            },
        },
        methods: {
            tizerRowHover(item, event){
                log(arguments);
            },
            tizerClick(item, event){
                log(arguments);
            },
        }
    }
)

const Pager = Vue.component(
    'pager',
    {
        template: '#tpl-pager',
    }
)

const PeriodSelector = Vue.component(
    'period-selector',
    {
        template: '#tpl-period-selector',
        props: ['classes', 'period-data', 'kind-data', 'context-data'],
        computed: {
            periodItems(){
                return this.periodData.items
            },
            activePeriod(){
                return store.getters.activePeriod
            },
            kindItems(){
                return this.kindData.items
            },
            activeKind(){
                return store.getters.activeKind
            },
            contextItems(){
                return this.contextData.items
            },
            activeContext(){
                return store.getters.activeContext
            },
        },
        methods: {
            clickPeriod(value){
                store.dispatch('setPeriod', value).then(() => {
                    EventBus.$emit('refresh-period');
                    log('Click period')
                })
            },
            clickKind(value){
                store.dispatch('setKind', value).then(() => {
                    EventBus.$emit('refresh-kind');
                    log('Click kind')
                })
            },
            clickContext(value){
                store.dispatch('setContext', value).then(() => {
                    EventBus.$emit('refresh-context');
                    log('Click context')
                })
            },
        }
    }
)

const ChartJs = Vue.component(
    'chart',
    {
        template: '#tpl-chart',
        props: ['chartSettings', 'redraw'],
        data(){
            return {
                chart: {},
                protected: {
                    id: 0
                }
            }
        },
        computed: {
            cssId(){
                return 'chart-widget-' + this.protected.id
            },
            chartData(){
                return this.chartSettings
            }
        },
        methods: {
            buildChart() {
                var ctx = this.$el

                if (!ctx) {
                    log('DOM element not found! ' + this.cssId)
                    return
                }
                ;

                this.chart = new Chart(ctx, this.chartData)
            },
        },
        mounted(){
            var thisChart = this

            this.protected.id = this.$root.newId()

            EventBus.$on('refresh-period', function () {
                thisChart.buildChart()
            })

            EventBus.$on('refresh-context', function () {
                thisChart.buildChart()
            })

            this.buildChart()
        },
        updated(){
            log('Chart ' + this.cssId + ' updated')
        }
    }
)

const app = new Vue({
    el: '#app',
    components: {
        'kpi-widget': KpiWidget,
        'table-statistics': TableStatistics,
        'period-selector': PeriodSelector,
        'pager': Pager,
    },
    computed: {
        dailyDetailed(){
            return store.state.dailyData;
        },
        weeklyDetailed(){
            return store.state.weeklyData;
        },
        monthlyDetailed(){
            return store.state.monthlyData;
        },
        dashboard(){
            return {
                kpis: this.kpis,
                charts: this.charts,
                detailed: this.detailed,
            }
        },
        getId(){
            return store.state.count
        },
        kpis() {
            return store.state[store.getters.activePeriod.itemId].kpis
        },
        charts() {
            return store.state[store.getters.activePeriod.itemId].charts
        },
        detailed(){
            return store.state[this.selectedPeriod.itemId]
                .detailed[this.selectedKind.itemId]
        },
        periods(){
            return store.state.dashboard.periods
        },
        selectedPeriod(){
            return store.getters.activePeriod
        },
        statisticsKinds(){
            return store.state.dashboard.statisticsKinds
        },
        selectedKind(){
            return store.getters.activeKind
        },
        statisticsContext(){
            return store.state.dashboard.statisticsContext
        },
        selectedContext(){
            return store.getters.activeContext()
        },
    },
    methods: {
        increment() {
            return store.commit('increment')
        },
        newId(){
            store.commit('increment')
            return this.getId
        }
    },
    mounted() {
        log('Application mounted')
        store.dispatch('getDashboardData');
    },

})
log('App started')

if (!PRODUCTION) {
    window.dashboard = app
    window.dashboard.___store = store
}
