<template>
  <div class="griddemo">
    <form id="search">Search <input name="query" v-model="searchQuery" /></form>
    <GridView
      :heroes="gridData"
      :columns="gridColumns"
      :filterKey="searchQuery"
    >
    </GridView>
  </div>
</template>

<script>
import GridView from "@/components/GridView.vue";
export default {
  name: "griddemo",
  data: function() {
    return {
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 }
      ]
    };
  },
  components: {
    GridView
  }
};
</script>
