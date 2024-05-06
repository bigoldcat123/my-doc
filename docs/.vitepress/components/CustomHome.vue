<script setup lang="ts">
// import VPHomeHero from 'vitepress'
// import VPHomeFeatures from 'vitepress'
// import VPHomeContent from 'vitepress'
import CustomHomeHero from './CustomHomeHero.vue';
import { VPHomeFeatures } from 'vitepress/theme';
// import  VPHomeContent  from 'vitepress/theme';
import CustomHomeContent from './CustomHomeContent.vue';

import { useData } from 'vitepress'

const { frontmatter,isDark } = useData()
</script>

<template>
  <div class="VPHome">
    <slot name="home-hero-before" />
    <div :style="isDark? 'background: linear-gradient(to bottom, #0f0c29, #302b63, #1b1b1f);':
                         'background: linear-gradient(to bottom, white,yellow, white);'">
      <CustomHomeHero  class="VPHomeHero">
      <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
      <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
    </CustomHomeHero>
    <slot name="home-hero-after" />

    <slot name="home-features-before" />
    <VPHomeFeatures />
    <slot name="home-features-after" />
    </div>


    <CustomHomeContent v-if="frontmatter.markdownStyles !== false">
      <Content />
    </CustomHomeContent>
    <Content v-else />
    <!-- <Content /> -->
  </div>
</template>

<style scoped>

.VPHome {
  margin-bottom: 96px;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 128px;
  }
}
</style>