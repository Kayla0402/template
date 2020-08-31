<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{env}}</h1>
    <h1>{{aaa}}</h1>
  </div>
</template>
<script>
import login from '@/network/http'
export default {
  name: 'About',
  components: {},
  data () {
    return {
      env: process.env.VUE_APP_BASEURL,
      aaa: process.env.VUE_APP_CURRENTMODE
    }
  },
  methods: {},
  async created () {
    const params = {
      type: 2,
      user_name: '912454063@qq.com',
      user_pass: '123456abc'
    }
    const res = await login.loginPassword(params)
    console.log(res)
  }
}
</script>
