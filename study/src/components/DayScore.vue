<template>
    <div class="score">
        <button 
            v-for="btn in buttons" 
            :key="btn.label" 
            @click="updateScore(btn.score)"
            :class="{'active' : btn.score == item.score}">
            {{btn.label}}    
        </button>  
    </div>
</template>

<script>
export default {
    name : 'DayScore',
    methods : {
        updateScore(score){
            // console.log(score);
            // console.log(this.item)
            this.$emit('onUpdateScore',this.item, score);
        }
    },
    computed : {},
    data(){
        return {
            buttons : [
                {label : 'GOOD', score : 3},
                {label : 'SOSO', score : 2},
                {label : 'BAD', score : 1},
            ]
        }
    },
    props : [
        'item'
    ],
}
</script>

<style scoped>
</style>