<style>
    .li-wrapper {
        position: relative;
    }

    .tree-view-item {
        padding: 5px 10px;
        margin: 2px;
        border: 1px solid #f0f0f0;
        box-shadow: 2px 1px 2px #f0f0f0;
    }

    .tree-view-item:hover {
        background-color: antiquewhite;
        cursor: pointer;
    }

    .tree-view-item > span:first-child + span:hover {
        cursor: help;
    }

    .tree-view-item.selected:hover {
        background-color: antiquewhite;
    }

    .tree-view-item.selected {
        background-color: cornflowerblue;
        color: white;
        opacity: 0.7;
    }

    .tree-view-item.bold {
        font-weight: 900;
    }

    .tree-view-item + ul {
        visibility: hidden;
        height: 0px;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
    }

    .tree-view-item + ul.open {
        height: initial;
        visibility: visible;
        opacity: 1;
    }
</style>

<template>
    <li :id="id" class="li-wrapper" v-show="!!opened">
        <div class="tree-view-item"
             :class="{bold: isFolder, selected: isSelected, 'open': isOpen, 'el-folder':isFolder}"
             @click.prevent.stop.self="click"
             @mouseover.prevent="mouseover" @mouseout.prevent="mouseout">
            <span v-if="isFolder">{{isOpen ? '-' : '+'}}</span>
            <span @click.prevent.stop.self="dblClick">{{model.tagName}} &nbsp; ({{childs}})</span>
        </div>
        <ul :class="{'open': isOpen}" v-if="isFolder">
            <tree-view-item ref="treeViewItem" v-for="model in model.children" :model="model"
                            :opened="open"></tree-view-item>
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
            isOpen(){
                return !!this.opened && this.open
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
            model: [Object, HTMLDivElement, HTMLElement],
            opened: [Boolean, String]
        },
        methods: {
            click: function (event) {
                if (this.isFolder) {
                    this.open = !!this.opened ? !this.open : !!this.opened
                }
            },
            dblClick: function () {
                document.querySelectorAll('.selected-item').forEach(el=>{el.classList.remove('selected-item')})
                this.$root.$emit('selected', this)
            },
            mouseover: function () {
                var s = this
                _.debounce(() => {
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
