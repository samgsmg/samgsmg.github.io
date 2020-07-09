<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import HelloWorld from '@components/HelloWorld.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HelloWorld },
}
</script>

<template>
  <Layout>
    <img src="@assets/images/logo.png" alt="logo" />
    <HelloWorld>Hello World</HelloWorld>
  </Layout>
</template>
