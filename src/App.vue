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
    <li v-for="product in products" :key="product.id">
      {{
        `產品類別：${product.category}，產品名稱：${product.title}，特價：${product.price}，折扣率：${((product.price / product.origin_price) * 100).toFixed(2)}%`
      }}
    </li>
  </ul>
</template>
