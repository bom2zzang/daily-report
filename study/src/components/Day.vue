<template>
    <div class="day">
        <h1 class="day-title">
            {{$route.params.date}}
        </h1>

        <ul class="day-list">
            <li v-for="item in items" :key="item.id" class="day-list-item">
                <div class="time">
                    <h2>
                        {{item.id}}
                    </h2>
                </div>
                <div class="action">
                    <input type="text" v-model="item.action" placeholder="한 일을 작성해주세요">
                </div>
            </li>

        </ul>
    </div>
</template>

<script>

export default {
    name : 'Day',
    methods : {},
    computed : {},
    data(){
        return {
            items : [
                {
                    action : "",
                    id : this.$router.currentRoute._value.params.date+"-08-10",
                    note: "",
                    open : false,
                    score : undefined,
                },
                {
                    action : "",
                    id : this.$router.currentRoute._value.params.date+"-10-12",
                    note: "",
                    open : false,
                    score : undefined,
                },
                {
                    action : "",
                    id : this.$router.currentRoute._value.params.date+"-12-14",
                    note: "",
                    open : false,
                    score : undefined,
                },
            ]

        }
    },
    props : {}
}
</script>

<style scoped>
</style>