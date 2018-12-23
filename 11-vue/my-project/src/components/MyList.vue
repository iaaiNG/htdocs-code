<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>显示用户名</h2>
    <ul>
      <li  v-for="(name,index) in names" v-bind:key=index>{{name.name}}</li>
    </ul>
    <button @click="getD">加载数据</button>
  </div>
</template>

<script>
export default {
  name: 'Mylist',
  data () {
    return {
      msg: '脚手架 vue-cli',
      names: [{name:1},{name:2},{name:3}]
    }
  },
  methods:{
    getD(){
      this.$http.get("http://127.0.0.1/list.php").then(
        function (data) {this.names = data.body},
        function (err) {alert(err)},
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
