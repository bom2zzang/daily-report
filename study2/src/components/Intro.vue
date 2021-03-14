<template>
    <div class="intro">
        <div class="intro-inner">
            <h1>Daily<br>Report</h1>
            <router-link class="button" :to="todayUrl">
                START
            </router-link>
        </div>
    </div>
</template>

<script>

import moment from "moment"

export default {
    name : 'Intro',
    methods : {},
    computed : {
        todayUrl(){
            return '/day/'+moment(new Date()).format('YYYY-MM-DD');
        }

    },
    data(){
        return {}
    },
    props : {}
}
</script>

<style scoped>
</style>