<template>
    <div id="app">
        <div class="navbar navbar-danger">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-responsive-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="javascript:void(0)">Brand</a>
                </div>
                <div class="navbar-collapse collapse navbar-responsive-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Обзор</a></li>
                        <li><a href="#">Компании</a></li>
                        <li><a href="#">Настройки</a></li>
                        <li><a href="#">Статистика</a></li>
                    </ul>
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control col-md-8" placeholder="Search">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 text-center"><h1>{{ msg }}</h1>
                </div>
                <div class="col-lg-10 col-md-9 col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            Basic panel
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">Panel heading</div>
                        <div class="panel-body">
                            Panel content
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            Panel content
                        </div>
                        <div class="panel-footer">Panel footer</div>
                    </div>                </div>
                <div class="col-lg-2 col-md-3 col-xs-12 bg-color-grey"></div>
                <!--<div class="col-lg-2 col-sm-4 col-xs-12">-->
                    <!--<period-selector :period-data="periods"-->
                                     <!--:kind-data="statisticsKinds"-->
                                     <!--:context-data="statisticsContext"-->
                    <!--&gt;</period-selector>-->
                <!--</div>-->
                <!--<main class="col-lg-10 col-sm-8 col-xs-12">-->
                    <!--<div class="row">-->
                        <!--<kpi-widget classes="col-xs-12 kpi" :kpis="kpis"-->
                                    <!--:charts-data="dashboard.charts"></kpi-widget>-->
                    <!--</div>-->
                    <!--<div class="col-md-12 card">-->
                        <!--<table-statistics :table-data="dashboard.detailed"></table-statistics>-->
                    <!--</div>-->
                    <!--<div class="row">-->
                        <!--<div class="bs-component card">-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="col-md-12">&ndash;&gt;-->
                    <!--&lt;!&ndash;<period-selector :period-data="periods"&ndash;&gt;-->
                    <!--&lt;!&ndash;:kind-data="statisticsKinds"&ndash;&gt;-->
                    <!--&lt;!&ndash;:context-data="statisticsContext"&ndash;&gt;-->
                    <!--&lt;!&ndash;&gt;</period-selector>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                <!--</main>-->
            </div>
        </div>
        <footer></footer>
        <!--<img src="./assets/logo.png">-->
        <!--<el-button @click.native="startHacking">Let's do it</el-button>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Use Vue 2.0 Today!'
            }
        },
        methods: {
            startHacking () {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                })
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>