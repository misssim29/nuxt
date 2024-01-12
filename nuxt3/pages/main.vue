<template>
    <div>
        <p>메인 페이지입니다.</p>
        <ul>
            <li v-for="item in products" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script setup>
const { data: products } = await useAsyncData('products', () =>
    $fetch("http://localhost:3000/products")
);
</script>


<style></style>