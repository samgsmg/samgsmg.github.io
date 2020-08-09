<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'

export default {
  components: { Layout },
  page: {
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title}| ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <Layout>
      <RouterView :key="$route.fullPath" />
    </Layout>
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern */
@import '@design';
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: $color-body-bg;
}
#app {
  @extend %typography-small;
}

// ===
// Base element styles
// ===

a,
a:visited {
  color: $color-link-text;
}

h1 {
  @extend %typography-xxlarge;
}

h2 {
  @extend %typography-xlarge;
}
h3 {
  @extend %typography-large;
}
h4 {
  @extend %typography-medium;
}
h5,
h6 {
  @extend %typography-small;
}
</style>
