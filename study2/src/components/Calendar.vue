<template>
    <div class="calendar">
        <!-- <vue-cal :time="false" active-view="month" :disable-views="['week','day']" :on-event-click="onEventClick" style="height: 500px"/> -->
        <!--test -->
        <full-calendar :config="config"></full-calendar>
    
    </div>
</template>

<script>
// import VueCal from 'vue-cal';
// import 'vue-cal/dist/vuecal.css';

// export default {
//     name : 'Calendar',
//     components : {
//         VueCal
//     },
//     methods : {
//         onEventClick(){
//             console.log("z");
//         }

//     },
//     computed : {},
//     data(){},
//     props : {}
// }


import  { FullCalendar }  from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css';

console.log(this);
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