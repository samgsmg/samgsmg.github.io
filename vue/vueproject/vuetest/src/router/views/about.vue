<template>
  <Layout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue'
import appConfig from '@src/app.config'
export default {
  page: {
    title: 'About',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
  },
}
</script>
