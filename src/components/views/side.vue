<template>
  <div class="hello">
    <iframe src="http://119.23.71.104:4711/WTMelec/index.html" width="100%" height="100%" border="0"></iframe>
  </div>
</template>

<script>
import faker from 'faker'
import api from '../../test/test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    tData () {
      return {
        displayName: faker.name.findName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        randomCard: faker.helpers.createCard()
      }
    }
  },
  mounted () {
    api.test()
    // api.test1()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  height: 100%;
  overflow: hidden;
  iframe{
    border: none;
  }
}
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
