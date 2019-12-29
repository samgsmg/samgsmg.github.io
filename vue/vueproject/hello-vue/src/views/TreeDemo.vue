<template>
  <ul class="treedemo">
    <tree-item
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    >
    </tree-item>
  </ul>
</template>

<script>
import TreeItem from "@/components/TreeItem.vue";
var treeData = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "watter" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "watter" }]
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "watter" }]
        }
      ]
    }
  ]
};
export default {
  name: "treedemo",
  data: function() {
    return {
      treeData: treeData
    };
  },
  components: {
    TreeItem
  },
  methods: {
    makeFolder: function(item) {
      this.$set(item, "children", []);
      this.addItem(item);
    },
    addItem: function(item) {
      item.children.push({ name: "new stuff" });
    }
  }
};
</script>
<style scoped lang="scss">
treedemo {
  font-family: Menlo, Consolas, monospace;
  color: #444;
  text-align: left;
}
.item {
  cursor: pointer;
}
</style>
