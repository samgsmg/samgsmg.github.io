<template>
  <Layout>
    <div class="home">
      <img alt="Vue logo" src="@assets/images/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </Layout>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import Layout from '@layouts/main.vue'
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    HelloWorld,
  },
}
</script>
