<template>
    <div id="app">
        <div class="navbar">
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
                <div class="col-xs-12">
                    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="htmlLoaderId">
                        Load HTML
                    </button>
                </div>
            </div>
            <div class="row">
                <main class="col-lg-10 col-md-9 col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            Place template editor here
                        </div>
                        <div class="panel-footer">Bottom buttons</div>
                    </div>
                </main>
                <aside class="col-lg-2 col-md-3 col-xs-12 bg-color-grey">
                    <property-editor></property-editor>
                </aside>
            </div>
        </div>
        <footer></footer>
        <html-loader :show="showLoader" :loader="loader">123</html-loader>
        <!--<img src="./assets/logo.png">-->
        <!--<el-button @click.native="startHacking">Let's do it</el-button>-->
    </div>
</template>

<script>
    import HtmlLoader from './components/adBlockTemplator/htmlLoader/htmlLoader.vue'
    import PropertyEditor from './components/adBlockTemplator/propertyEditor/propertyEditor.vue'

    export default {
        components: {HtmlLoader, PropertyEditor},
        data () {
            return {
                msg: 'Use Vue 2.0 Today!',
                showLoader: false,
                loaded: this.loadHtml
            }
        },
        methods: {
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>