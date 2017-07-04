<style>

</style>
<template>
    <div class="panel panel-default">
        <div class="panel panel-default">
            <div class="panel-heading">Top buttons</div>
            <div class="panel-body">
                Properties
            </div>
            <div class="panel-footer">Bottom buttons</div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import state from '../../../store/store'


    export default {
        data () {
            return {
                id: 'pe-'+window.Math.random().toString(32).substr(2)
            }
        },
        props: [],
        methods: {
            done () {
            }
        },
        created () {
        }
    }
</script>
