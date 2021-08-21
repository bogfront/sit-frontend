<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UITable from '@/components/ui/UITable.vue';

@Options({
  components: {
    UITable,
  },
})

export default class App extends Vue {}
</script>

<template>
  <UITable />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 8px 16px;
  border: 2px solid darkblue;
  background: #ffffff;
  color: darkblue;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    background: #f1f1f1;
  }
}
</style>
