<script>
import appConfig from '@src/app.config'
import HelloWorld from '@components/HelloWorld.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { HelloWorld },
}
</script>

<template>
  <div>
    <img src="@assets/images/logo.png" alt="logo" />
    <HelloWorld>Hello World</HelloWorld>
  </div>
</template>
