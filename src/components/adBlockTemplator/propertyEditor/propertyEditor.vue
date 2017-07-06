<style>
    .form-group {
        padding-bottom: 7px;
        margin: 5px 0 0 0;
    }</style>
<template>
    <div :id="id" class="panel panel-default">
        <div class="panel panel-default">
            <div class="panel-heading">Properties</div>
            <div class="panel-body">
                <div class="form-group label-floating">
                    <label class="control-label" for="previewBackground">Background</label>
                    <input class="form-control" id="previewBackground" type="text" :value="state.background"
                           @input.prevent="setBackground($event.target.value); updateViewport()">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="previewColWidth">Viewport width</label>
                    <input class="form-control" id="previewColWidth" type="text" :value="state.width"
                           @input.prevent="setWidth($event.target.value); updateViewport()">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="previewColHeight">Viewport height</label>
                    <input class="form-control" id="previewColHeight" type="text" :value="state.height"
                           @input.prevent="setHeight($event.target.value); updateViewport()">
                </div>
            </div>
            <div class="panel-footer">&nbsp;</div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

    export default {
        name: 'property-editor',
        data () {
            return {
                id: 'pe-' + window.Math.random().toString(32).substr(2)
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
