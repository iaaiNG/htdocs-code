<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>JKM / iaaiNG</h2>
  </div>
</template>
<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      msg: '脚手架 vue-cli '
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
