<style>

</style>
<template>
    <div class="template-element"
         :class="{bold: isFolder, selected: isSelected, 'open': isOpen, 'el-folder':isFolder}"
         @mouseover.prevent="mouseover" @mouseout.prevent="mouseout"
         @click.prevent.stop="click"
         @click.prevent.stop.ctrl="selectItem">
        <span v-if="isFolder">{{isOpen ? '-' : '+'}}</span>
        <span @click.prevent.stop="click"
              @click.prevent.stop.ctrl="selectItem">
                {{selectorString}} &nbsp; {{isFolder ? '(' + childs + ')' : ''}}
            </span>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

    const TemplateElement = {
        name: 'template-element',
        data: () => {
            return {
                id: 'te-'+Math.random().toString(32).substr(2)
            }
        },
        computed:{

        },
        methodts:{
            click(e){
                this.$emit('click', e)
            },
            renderData(json){
                return ''
            }
        }
    }
    Vue.component('template-element', TemplateElement)
    export default TemplateElement
</script>