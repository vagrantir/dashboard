<style>

</style>

<template>
    <div :id="id" class="modal" :class="{show: isActive}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <textarea name="template-html" id="template" cols="30" rows="10"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="this.done()">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
                id: 'hl-'+window.Math.random().toString(32).substr(2)
            }
        },
        computed : {
//            isActive: this.state.htmlLoader.visible,
//            ...mapGetters()
        },
//        props: ['show', 'loader'],
        methods: {
            done () {
            }
        },
        created () {
            this.$store.dispatch('htmlLoader/setId', {id: this.id})
        }
    }
</script>
