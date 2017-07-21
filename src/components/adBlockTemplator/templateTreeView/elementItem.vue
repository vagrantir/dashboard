<style>
    .li-wrapper {
        position: relative;
    }

    .element-item {
        display: inline-block;
        min-width: 150px;
        padding: 5px 10px;
        margin: 2px;
        border: 1px solid #f0f0f0;
        box-shadow: 2px 1px 2px #f0f0f0;
    }

    .element-item:hover {
        background-color: antiquewhite;
        cursor: pointer;
    }

    /*.tree-view-item > span:first-child + span:hover {*/
    /*cursor: help;*/
    /*}*/

    .element-item.selected:hover {
        background-color: antiquewhite;
    }

    .element-item.selected {
        background-color: cornflowerblue;
        color: white;
        opacity: 0.7;
    }

    .element-item .btn-group {
        margin: 0px;
    }

    .element-item .btn.btn-xs,
    .element-item .input-group-btn .btn.btn-xs,
    .element-item .btn-group-xs .btn,
    .element-item .btn-group-xs .input-group-btn .btn {
        padding: 4px 8px;
        font-size: 10px;
    }

    .element-item + ul {
        visibility: hidden;
        height: 0px;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
    }

    .element-item + ul.open {
        height: initial;
        visibility: visible;
        opacity: 1;
    }
</style>

<template>
    <li :id="id" class="li-wrapper" v-show="!!opened">
        <div class="element-item"
             :class="{bold: isFolder, selected: isSelected, 'open': isOpen, 'el-folder':isFolder}"
             @mouseover.prevent="mouseover" @mouseout.prevent="mouseout"
             @click.prevent.stop.ctrl="selectItem">
            <div class="btn-group btn-group-xs" v-if="isMovable">
                <a href="javascript:void(0)" class="btn btn-xs">&downarrow;</a>
                <a href="javascript:void(0)" class="btn btn-xs">&uparrow;</a>
            </div>
            <!--<span v-if="isFolder">{{isOpen ? '-' : '+'}}</span>-->
            <span @click.prevent.stop="click"
                  @click.prevent.stop.ctrl="selectItem">
                {{state.label}} &nbsp; {{isFolder ? '(' + cildrenCount + ')' : ''}}
            </span>
        </div>
        <div class="btn-group btn-group-xs dropdown" :id="'#context-menu-'+id">
            <a href="bootstrap-elements.html" class="btn btn-xs" v-if="isRemovable">
                &minus;
            </a>
            <a href="bootstrap-elements.html" class="btn btn-xs dropdown-toggle"
               data-target="#" data-toggle="dropdown"
               v-if="false">
                &plus;
            </a>
            <ul class="dropdown-menu">
                <li v-for="b in this.state.allowedChild" @click="appendChild({'parent':state, 'child':b()})"><a
                        href="#">{{ (b()).label }}</a></li>
            </ul>
        </div>
        <ul :class="{'open': isOpen}" v-if="isFolder">
            <element-item ref="treeViewItem" v-for="model in state.children" :state="model"
                          :opened="open" :movable="isChildMovable"></element-item>
        </ul>
    </li>
</template>

<script>
    import * as sys from '../../../utils/system'
    import Vue from 'vue'
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

    export default {
        name: 'element-item',
        data () {
            return {
//                id: 'item-' + window.Math.random().toString(32).substr(2),
                tagName: 'My Tree',
                classes: '',
                style: '',
                open: false,
                element: {},
            }
        },
        computed: {
            isFolder() {
                return this.state &&
                    this.state.children &&
                    this.state.children.length
            },
            isOpen(){
                return !!this.opened && this.open
            },
            isMovable(){
                return this.movable
            },
            isChildMovable(){
                return this.state && this.state.children ? this.state.children.length > 1 : false
            },
            isSelected() {
                return (this.selectedItem === this.id)
            },
            cildrenCount(){
                return this.state && this.state.children ? this.state.children.length : 0
            },
            modelName: () => {
                return this.state.name
            },
            children(){
                return this.state.children
            },
            selectorString(){
                var cl = ''
                try {
                    for (var c of this.element.classList.values()) {
                        cl = cl + '.' + c
                    }
                } catch (e) {
                }
                return this.element.tagName + cl
            },
            ...mapGetters('blockViewer', [
                'selectedItem'
            ])
        },
        props: {
            state: [Object, HTMLDivElement, HTMLElement],
            opened: [Boolean, String],
            movable: [Boolean, String]
        },
        methods: {
            click: function () {
                if (this.isFolder) {
                    this.open = !!this.opened ? !this.open : !!this.opened
                }
            },
            selectItem: function () {
                document.querySelectorAll('.selected-item').forEach(el => {
                    el.classList.remove('selected-item')
                })
                this.$root.$emit('selected', this)
                console.log(this.m)
                this.setPropertyEditorElement(this.m)
            },
            appendChild: function ({parent, child}) {
                log(arguments)
                this.state.children.push(child)
            },
            mouseover: function () {
//                this.model.classList.add('flash')
//                this.model.classList.add('animated')
            },
            mouseout: function () {
//                this.model.classList.remove('animated')
//                this.model.classList.remove('flash')
            },
            ...mapActions('propertyEditor', {
                setPropertyEditorElement: 'setElement'
            }),
            ...mapActions('element', [
                '_appendChild'
            ]),
        },
        mounted(){
//            log('element-item mounted()', this.element)
        },
        beforeUpdate(){
//            log('tree-view-item beforeUpdate()')
        },
        updated(){
//            log('element-item updated()', this.element)
        },
    }
</script>
