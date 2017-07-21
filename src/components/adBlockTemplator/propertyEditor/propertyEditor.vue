<style>
    .form-group {
        padding-bottom: 7px;
        margin: 5px 0 0 0;
    }

    .form-group .checkbox label,
    .form-group .radio label, .form-group label,
    .form-group.is-focused .radio label, .form-group.is-focused label.radio-inline,
    .form-control {
        font-size: 14px;
        color: #000;
        font-weight: 400;
    }

    .form-group .checkbox label,
    .form-group .radio label, .form-group label,
    .form-group.is-focused .radio label, .form-group.is-focused label.radio-inline {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 400;
    }
</style>
<template>
    <div class="panel-group" :id="id" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title" id="heading-1">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#layout-props" aria-expanded="true" aria-controls="layout-props">
                            Параметры области просмотра
                        </a>
                    </div>
                </div>
                <div id="layout-props" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-1">
                    <div class="panel-body">
                        <div class="form-group label-floating">
                            <label class="control-label" for="previewBackground">Фон</label>
                            <input class="form-control input-sm" id="previewBackground" type="text"
                                   :value="state.background"
                                   @input.prevent="setBackground($event.target.value); updateViewport()">
                        </div>
                        <div class="form-group label-floating">
                            <label class="control-label" for="previewColWidth">Ширина</label>
                            <input class="form-control input-sm" id="previewColWidth" type="text" :value="state.width"
                                   @input.prevent="setWidth($event.target.value); updateViewport()">
                        </div>
                        <div class="form-group label-floating">
                            <label class="control-label" for="previewColHeight">
                                Высота
                            </label>
                            <input class="form-control input-sm" id="previewColHeight" type="text" :value="state.height"
                                   @input.prevent="setHeight($event.target.value); updateViewport()">
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="sl-font-1">
                                Шрифт блока
                            </label>
                            <select class="form-control col-md-12" name="sl-font-1" id="sl-font-1" value="1">
                                <option value="Tahoma" selected="">Tahoma</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Trebuchet MS">Trebuchet MS</option>
                                <option value="Arial">Arial</option>
                            </select>
                            <!--<input class="form-control input-sm" id="sl-font" type="text" >-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title" id="heading-2">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                           href="#block-props" aria-expanded="true" aria-controls="block-props">
                            Параметры блока
                        </a>
                    </div>
                </div>
                <div id="block-props" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-2">
                    <div class="panel-body">
                        <b>Ориентация блока</b>
                        <div class="form-group">
                            <div class="radio" v-for="o in orientaions">
                                <label>
                                    <input type="radio" name="orientation" :value="o.val" checked="">
                                    {{ o.name }}
                                </label>
                            </div>
                        </div>
                        <div class="form-group label-floating">
                            <label class="control-label" for="i-1">Кол-во тизеров</label>
                            <input class="form-control input-sm" id="i-1" type="text">
                        </div>
                        <div class="form-group label-floating">
                            <label class="control-label" for="i-2">Кол-во строк</label>
                            <input class="form-control input-sm" id="i-2" type="text">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="panel-title" id="heading-3">
                    <a role="button" data-toggle="collapse" data-parent="#accordion"
                       href="#element-props" aria-expanded="true" aria-controls="element-props">
                        Параметры елемента
                    </a>
                </div>
            </div>
            <div id="element-props" class="panel-collapse collapse in" role="tabpanel"
                 aria-labelledby="heading-3">
                <div class="panel-body">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

    export default {
        name: 'property-editor',
        data () {
            return {
                id: 'pe-' + window.Math.random().toString(32).substr(2),
                orientaions: [
                    {val: 0, name: "Горизонтально"},
                    {val: 1, name: "Вертикально"},
                    {val: 2, name: "Левый выезжающий"},
                    {val: 3, name: "Правый выезжающий"},
                ]
            }
        },
        computed: {
            ...mapState({
                'state': 'propertyEditor'
            })
        },
        props: [],
        methods: {
            ...mapActions('propertyEditor', [
                'setWidth',
                'setHeight',
                'setBackground',
            ]),
            updateViewport () {
                this.$root.$emit('updateViewport', this.state)
            }
        },
        created () {
            this.$store.dispatch('propertyEditor/setId', {id: this.id})
        }
    }
</script>
