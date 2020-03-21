<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonCounter from "@/components/ButtonCounter.vue";

export default {
  name: "about",
  props: {
    msg: {
      type: String,
      default: "This is an about page"
    }
  },
  components: {
    ButtonCounter
  }
};
</script>
