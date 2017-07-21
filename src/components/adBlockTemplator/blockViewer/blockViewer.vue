<style>
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: stretch;
    }

    .flex-item:nth-child(1) {
        order: 0;
        flex: 0 0 100%;
        align-self: auto;
        overflow: auto;
    }

    .blockViewport {
        /*border: solid 1px lightblue;*/
        /*background-color: #ffffff;*/
        margin: 10px auto;
        /*width: 100%;*/
        /*min-height: 1px;*/
        /*float: left;*/
    }

    .blockViewport .hovered-item {
        position: relative;
    }

    .blockViewport .hovered-item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        opacity: .5;
        background-color: darkslateblue;
    }

    .blockViewport .selected-item {
        position: relative;
    }

    .blockViewport td.selected-item:before, .blockViewport div.selected-item:before, .blockViewport a.selected-item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        opacity: .5;
        background-color: red;
        background-color: rgba(255, 0, 0, .3);
    }

    .flex-item:nth-child(2) {
        order: 0;
        flex: 0 0 100%;
        align-self: auto;
        overflow: auto;
        position: relative;
    }

    .blockTreeview {
        /*border: solid 1px #f0f0f0;*/
        /*border-radius: 2px;*/
        /*background-color: #ffffff;*/
        /*margin: 10px auto;*/
        /*padding: 20px;*/
        /*!*box-shadow: 1px 2px 2px 0px #eeeeee;*!*/
        /*width: 95%;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*bottom: 0;*/
        /*!*min-height: 100px;*!*/
        /*!*float: left;*!*/
    }

    .blockTreeview ul {
        padding-left: 10px;
    }

    .blockTreeview ul li {
        list-style: none;
    }
</style>
<template>
    <div :id="id" class="panel panel-default">
        <div class="panel-body">
            <div class="col-sm-12" :class="isVertical ? 'col-lg-8 col-md-7' : ''">
                <div class="flex-container" style="flex-direction: row;">
                    <div class="flex-item" :style="'background: '+state.background">
                        <div class="blockViewport" :style="blockViewStyle">
                            &nbsp
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12" :class="isVertical ? 'col-lg-4 col-md-5' : ''">
                <div class="blockTreeview" :style="blockTreeViewStyle">
                    <ul>
                        <element-item ref="elementItem" v-if="!!block" :state="block" :opened=true :movable=false></element-item>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel-footer">div > table > tbody > tr</div>
    </div>
</template>
<script>
    import * as sys from '../../../utils/system'
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
    import Vue from 'vue'
    //    import * as e from './ElementModule'

    sys.logging(true)

    export default {
        name: 'block-viewer',
        data () {
            return {
                id: 'bv-' + window.Math.random().toString(32).substr(2),
                root: {},
                block: {},
                selected: {},
            }
        },
        computed: {
            ...mapState({
                'state': 'blockViewer'
            }),
            classes(){
                return ""
            },
            isVertical (state) {
                let w = state.width.toString().match(/(\d+)/g),
                    h = state.height.toString().match(/(\d+)/g)
                w = w ? +w[0] : 300
                h = h ? +h[0] : 600
                return h > w
            },
            blockViewStyle (state){
                var w = state.width ? 'width:' + state.width + '; ' : '',
                    h = state.height ? 'height:' + state.height + '; ' : ''
//                console.log(w, h)
                return w + h
            },
            blockTreeViewStyle (state){
                return ''
            },
        },
        props: ['width', 'height'],
        methods: {
            generateTenplate(){

            },
            ...mapActions('blockViewer', [
                'setId',
                'setBlock',
                'setHtml'
            ]),
            ...mapActions('element', {
                'createElement': 'create',
            })
        },
//        beforeCreate: function () {
//            this.$options.components.TreeViewItem = require('../templateTreeView/elementItem.vue')
//        },
        created () {
            this.$store.dispatch('blockViewer/setId', {id: this.id})
        },
        mounted(){
            // Компонент создан и смонтирован, теперь можно создать первый блок
            this.createElement('advertisingBlock', {}).then((el) => {
                this.block = el
                this.$refs.elementItem.$forceUpdate()
            })
            let s = '#' + this.id + ' .blockViewport'
            let self = this
            self.root = document.querySelector(s)
            self.$store.dispatch('blockViewer/initRoot', self.root)
            self.$root.$on('htmlUpdated', () => {
                // event DISABLED
                return false
                self.root = document.createElement('div')
                try {
                    console.log('root updating', self, self.root, self.state.root)
                } catch (e) {
                    console.log(e)
                }
                Vue.nextTick(function () {
                    self.root = self.state.root.firstElementChild
                    try {
                        self.$refs.treeViewItem.$forceUpdate()
                    } catch (e) {
                    }
//                    self.root.replaceWith(self.state.root)
                })
            })
        },
        beforeUpdate(){
//            log('blockView beforeUpdate()')
        },
        updated(){
//            log('blockView updated()')
        },
    }
</script>
