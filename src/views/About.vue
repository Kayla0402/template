<template>
  <div class="about">
<!--    <header-top/>-->
    <h1 @click="setMsg">This is an about page</h1>
    <h1>{{env}}</h1>
    <h1>{{aaa}}</h1>
  </div>
</template>
<script>
// import login from '@/network/http'
// import HeaderTop from '@/components/Header'

export default {
  name: 'About',
  components: {
    // HeaderTop
  },
  data () {
    return {
      env: process.env.VUE_APP_BASEURL,
      aaa: process.env.VUE_APP_CURRENTMODE
    }
  },
  methods: {
    setMsg () {
      // const setChannel = new BroadcastChannel('demos')
      // setChannel.postMessage('about页面修改msg')
      localStorage.setItem('message', JSON.stringify({
        message: '消息',
        from: 'Page 1',
        date: Date.now()
      }))
    }
  }
  // async created () {
  //   // const params = {
  //   //   type: 2,
  //   //   user_name: '912454063@qq.com',
  //   //   user_pass: '123456abc'
  //   // }
  //   // const res = await login.loginPassword(params)
  //   // console.log(res)
  // }
}
</script>
