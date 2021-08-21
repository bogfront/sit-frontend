import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import * as clusterize from 'clusterize.js';

const app = createApp(App)
app.provide('clusterize', clusterize ) // <-- define here
app.mount('#app')
