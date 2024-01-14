<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import metaTags, {siteTitle, siteName} from './utility/metaTags';
const route = useRoute();

useHead({
  title: siteName + ( route.path !== '/' ? route.path.replace('/', ' | ') : ` | ${siteTitle}`),
  meta: metaTags
});
</script>
