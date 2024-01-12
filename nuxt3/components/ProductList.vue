<template>
    <ul>
        <li v-for="item in products" :key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
const { data: products } = await useAsyncData('products', () =>
    $fetch("http://localhost:3000/products")
)
</script>

<style></style>