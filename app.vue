<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import metaTags from './utility/metaTags';
const route = useRoute();

useHead({
  title: 'Catepedia' +( route.path !== '/' ? route.path.replace('/', ' - ') : ''),
  meta: metaTags
})
</script>
