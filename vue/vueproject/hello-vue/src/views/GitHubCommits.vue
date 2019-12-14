<template>
  <div class="gitcommits">
    <h1>Latest Vue.js Commits</h1>
    <div>
      <label v-for="branch in branches" :key="branch">
        <input
          :value="branch"
          :id="branch"
          type="radio"
          v-model="currentBranch"
        />
        {{ branch }}
      </label>
    </div>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <div class="cimmits">
      <ul>
        <li v-for="record in commits" :key="record.sha">
          <a :href="record.html_url" target="_blank" class="commit">
            {{ record.sha.slice(0, 7) }}
          </a>
          -
          <span class="message">{{ record.commit.message | truncate }}</span>
          <br />by
          <span class="author">
            <a :href="record.author.html_url" target="_blank">
              {{ record.commit.author.name }}
            </a>
          </span>
          at
          <span class="date">{{ record.commit.author.date | formatDate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "githubcommits",
  data: function() {
    return {
      branches: ["master", "dev"],
      currentBranch: "master",
      commits: null
    };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    currentBranch: function() {
      this.fetchData();
    }
  },
  filters: {
    truncate: function(v) {
      var newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatData: function(v) {
      return v.replace(/T|Z/g, " ");
    }
  },
  methods: {
    fetchData: function() {
      var apiURL =
        "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", apiURL + self.currentBranch);
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText);
      };
      xhr.send();
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 20px 0 0;
  font-size: 2em;
}
a {
  text-decoration: none;
  color: #f66;
}
ul {
  width: -moz-fit-content;
  width: fit-content;
  text-align: left;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.commits {
  text-align: center;
}
.gitcommits {
  text-align: center;
}
.author,
.date {
  font-weight: bold;
}
</style>
