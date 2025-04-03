<template>
  <li class="nav-item">
    <RouterLink :to="menu.uri" class="nav-link">{{ menu.text }}</RouterLink>
  </li>
</template>

<script setup>
const props = defineProps({
  menu: { type: Object, required: true },
});
</script>

<!-- 
<li class="nav-item">
  <RouterLink to="/all" class="nav-link">All</RouterLink>
</li>
<li class="nav-item">
  <RouterLink to="/get/1" class="nav-link">Get</RouterLink>
</li>
<li class="nav-item">
  <RouterLink to="/post" class="nav-link">Post</RouterLink> -->
