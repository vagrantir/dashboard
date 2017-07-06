<style>
    .tree-view-item {
        padding: 5px 10px;
        margin: 2px;
        border: 1px solid #f0f0f0;
        box-shadow: 2px 1px 2px #f0f0f0;
    }
    .tree-view-item:hover{
        background-color: antiquewhite;
        cursor: pointer;

    }
    .tree-view-item.selected:hover{
        background-color: antiquewhite;
    }

    .tree-view-item.selected {
        background-color: cornflowerblue;
        color: white;
        opacity: 0.9;
    }

    .tree-view-item.bold {
        font-weight: 900;
    }
</style>

<template>
    <li :id="id">
        <div class="tree-view-item" :class="{bold: isFolder, selected: isSelected}" @click.prevent.stop.self="click"
             @dblclick.prevent.stop.self="dblClick"
             @mouseover.prevent="mouseover" @mouseout.prevent="mouseout">
            <span v-if="isFolder">{{open ? '-' : '+'}}</span>
            <span>{{model.tagName}} &nbsp; ({{childs}})</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <tree-view-item ref="treeViewItem" v-for="model in model.children" :model="model"></tree-view-item>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue'
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
    import _ from 'lodash'

    export default {
        name: 'tree-view-item',
        data () {
            return {
                id: 'item-' + window.Math.random().toString(32).substr(2),
                tagName: 'My Tree',
                classes: '',
                style: '',
                el: null,
                open: false,
                children: []
            }
        },
        computed: {
            isFolder() {
                return this.model &&
                    this.model.children &&
                    this.model.children.length
            },
            isSelected() {
                return (this.selectedItem === this.id)
            },
            childs(){
                return this.model && this.model.children ? this.model.children.length : 0
            },
            ...mapGetters('blockViewer', [
                'selectedItem'
            ])
        },
        props: {
            model: [Object, HTMLDivElement, HTMLElement]
        },
        methods: {
            click: function (event) {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            dblClick: function () {
                this.$root.$emit('selected', this)
            },
            mouseover: function () {
                var s = this
                _.debounce(()=>{
                    console.log(s)
                    this.model.classList.remove('animated')
                    this.model.classList.remove('flash')
                    s.model.classList.add('flash')
                    s.model.classList.add('animated')
                }, 200)
                s.model.classList.add('flash')
                s.model.classList.add('animated')
            },
            mouseout: function () {
                this.model.classList.remove('animated')
                this.model.classList.remove('flash')
            },
        },
//        beforeCreate: function () {
//            this.$options.components.TreeViewItem = require('./tree-view-item.vue')
//        },
        mounted(){
            this.model.$vm = this
        },
    }
</script>
