<script setup>
import { computed, onMounted, ref } from "vue";
import { APIGetProducts } from "./api/axios";
const products = ref([]);
const selectedCategory = ref("");
onMounted(async () => {
  products.value = await APIGetProducts();
});
// 依選取的類別篩選；空字串代表「全部」
const filteredProducts = computed(() =>
  selectedCategory.value === ""
    ? products.value
    : products.value.filter(
        (product) => product.category === selectedCategory.value,
      ),
);
</script>
<template>
  <h1>產品資料</h1>
  <select id="category" v-model="selectedCategory">
    <option value="">全部</option>
    <option value="床架">床架</option>
    <option value="收納">收納</option>
    <option value="窗簾">窗簾</option>
  </select>
  <ul>
    <li v-for="product in filteredProducts" :key="product.id">
      {{
        `產品類別：${product.category}，產品名稱：${product.title}，特價：${product.price}，折扣率：${((product.price / product.origin_price) * 100).toFixed(2)}%`
      }}
    </li>
  </ul>
</template>
