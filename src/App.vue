<script setup>
import { onMounted } from "vue";
import { APIGetProducts } from "./api/axios";
import { ref } from "vue";
const products = ref([]);
onMounted(async () => {
  products.value = await APIGetProducts();
});
</script>
<template>
  <h1>產品資料</h1>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.title }}</li>
  </ul>
</template>
