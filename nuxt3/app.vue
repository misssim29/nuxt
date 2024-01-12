<template>
  <div>
    <NuxtLayout>
      <NuxtPage>
        <Suspense />
      </NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// 기본 Head태그
useHead({
  title: 'learn Nuxt',
  meta: [
    { name: 'description', content: 'Nuxt3 배우기' },
  ]
});
// SEO Meta태그
useSeoMeta({
  title: '타이틀',
  ogTitle: 'ogTitle',
  ogDescription: 'ogDescription',
});

</script>
