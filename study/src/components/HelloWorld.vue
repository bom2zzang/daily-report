<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ auther }}</h1>
    <p>age : {{ age + 10 }}</p>
    <p v-html="article"></p>
    <p>{{ seen ? 'yes' : 'no' }}</p>
    <p v-if="ifseen"> ifseen? </p>
    <p v-else> false </p>
    <p v-show="ifshow"> show </p>
    <p v-show="!ifshow"> !show </p>
    <a v-bind:href="url">구글 </a><br/>
    <a :href="url">구글 </a>
    <p :class="{ active: isActive }">활성화</p> 
    <p :style="{color : 'red', fontSize : fontSize + 'px'}">스타일!</p>

    {{items}}
    <ul>
      <li v-for="item in items" :key="item.name">
         {{item.name}} / {{item.age}}
      </li>
    </ul>

    {{person}}
    <ul>
      <li v-for="(val,key,idx) in person" :key="idx">
        {{val}}
      </li>
    </ul>

    <button v-on:click.once="updateScore(1)">클릭클릭</button>
    <h1>score : {{score}}</h1>

    <input @keyup.enter="enterEvent()"/>

    <h2>오늘 : {{today}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods : {
    updateScore(score){
      console.log(score);
      this.score = score;

    },
    enterEvent(){
      console.log("enter");
    },
  },
  computed : {
    today() {
      let date = new Date();
      return '/day/'+date.getDay();
    }
  },
  data() {
    return{
      score : 0,
      msg: '방가',
      auther : 'bob',
      age : 31,
      article : `<strong>Hello</strong> world`,
      seen : true,
      ifseen : false,
      ifshow : true,
      url : "http://google.com",
      isActive : false,  
      fontSize : 30,
      items : [
        {name : 'aaa', age : 11},
        {name : 'bbb', age : 12},
        {name : 'uuu', age : 13},
      ],
      person : {
        name : "bom",
        age : 32,
        fav : "U",
      },
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
