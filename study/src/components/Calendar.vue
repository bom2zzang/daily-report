<template>
    <div class="calendar">
        <full-calendar :config="config">왜왜왜</full-calendar>
        <!-- <calendar></calendar> -->
        d왜 안나오고 ㅠ
    </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css';
// import { Calendar } from '@toast-ui/vue-calendar';
// import 'tui-calendar/dist/tui-calendar.css';
export default {
    name : 'Calendar',
    components : {
        FullCalendar
    },
    methods : {},
    computed : {},
    data(){
        return {
            config:{
                defaultView: 'month',
                header:{
                    left:'prev',
                    center:'title',
                    right:'next',
                },
                height: 500,
            }
        }
    },
    props : {}
}
</script>

<style scoped>
</style>