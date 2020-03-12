<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

console.log('Adam template!!!')
@Component<AdamLayout>({
  name: 'AdamLayout'
})
export default class AdamLayout extends Vue {}
</script>
