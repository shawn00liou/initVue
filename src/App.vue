<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
const A:String = 'ssss'
console.log(A)
console.log('$$$$$$$$$$$$$')
console.log('client-->', process.env.CLIENT)
console.log('service-->', process.env.SERVER)
</script>
