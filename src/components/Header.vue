<template>
  <div class="header">
    <a @click="login"> 登录</a>
    <a @click="outLogin"> 退出登录</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    login () {
      console.log(222)
    },
    outLogin () {
      console.log(333)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  height: 100px;
  background: antiquewhite;
  a {
    width: 100px;
    height: 100%;
    text-align: center;
    line-height: 100px;
    background: #42b983;
    margin-right: 50px;
    color: #fff;
    display: inline-block;
  }
}
</style>
