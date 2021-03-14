<template>
    <div class="calendar">
        <vue-cal :time="false" active-view="month" :disable-views="['week','day']" :on-event-click="onEventClick" style="height: 500px"/>
    </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
export default {
    name : 'Calendar',
    components : {
        VueCal
    },
    methods : {
        onEventClick(){
            console.log("z");
        }

    },
    computed : {},
    data(){},
    props : {}
}
</script>

<style scoped>
</style>