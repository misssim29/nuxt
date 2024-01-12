<template>
	<main class="app">
		<SearchInput :keyword="keyword" @input="updateKeyword"></SearchInput>
		<p>메인 페이지입니다.</p>
		<ul>
			<li v-for="item in products" :key="item.id" class="item" @click="moveToDetailPage(item.id)">
				<img src="~/assets/background-demo.jpg" :alt="item.name" class="product-image" />
				<p>{{ item.name }}</p>
				<span>{{ item.price }}</span>
			</li>
		</ul>
		<div class="cart-wrapper">
			<button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
		</div>
	</main>
</template>

<script setup>
const router = useRouter();
let keyword = '';

const updateKeyword = ($event) => {
	keyword = $event.target.value;
}

const { data: products } = await useAsyncData('products', () =>
	$fetch("http://localhost:3000/products")
);

const moveToDetailPage = (id) => {
	router.push(`detail/${id}`);
}

const moveToCartPage = () => {
	router.push('/cart');
}

</script>

<style scoped>
.flex {
	display: flex;
	justify-content: center;
}

.item {
	display: inline-block;
	width: 400px;
	height: 300px;
	text-align: center;
	margin: 0 0.5rem;
	cursor: pointer;
}

.product-image {
	width: 400px;
	height: 250px;
}

.app {
	position: relative;
}

.cart-wrapper {
	position: sticky;
	float: right;
	bottom: 50px;
	right: 50px;
}

.cart-wrapper .btn {
	display: inline-block;
	height: 40px;
	font-size: 1rem;
	font-weight: 500;
}
</style>
