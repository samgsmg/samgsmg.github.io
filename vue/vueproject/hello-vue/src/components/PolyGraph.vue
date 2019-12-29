<template>
  <div id="polygraph">
    <g>
      <circle cx="100" cy="100" r="80"></circle>
      <axis-label
        v-for="(stat, index) in stats"
        :key="index"
        :stat="stat"
        :index="index"
        :total="stats.lenght"
      >
      </axis-label>
    </g>
  </div>
</template>

<script>
export default {
  props: ["stats"],
  computed: {
    points: function() {
      var total = this.stats.length;
      return this.stats
        .map(function(stat, i) {
          var point = valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        })
        .joint(" ");
    }
  },
  components: {
    "axis-label": {
      props: {
        stat: Object,
        index: Number,
        total: Number
      },
      computed: {
        point: function() {
          return valueToPoint(this.stat.value + 10), this.index, this.total;
        }
      },
      template: '<text :x="point.x" :y="point.y">{{stat.label}}</text>'
    }
  }
};

function valueToPoint(value, index, total) {
  var x = 0;
  var y = -value * 0.8;
  var angle = ((Math.PI * 2) / total) * index;
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var tx = x * cos - y * sin + 100;
  var ty = x * sin - y * cos + 100;
  return {
    x: tx,
    y: ty
  };
}
</script>
