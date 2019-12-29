<template>
  <div id="svgchart">
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>

    <div v-for="stat in stats" :key="stat.label">
      <label>{{ stat.label }}</label>
      <input type="range" v-model="stat.value" min="0" max="100" />
      <span>{{ stat.value }}</span>
      <button @click="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
      <input name="newlabel" v-model="newLabel" />
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
  </div>
</template>
