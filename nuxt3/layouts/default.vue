<template>
	<div class="DefaultLayout">
		<h1>
			<NuxtLink to="/">Nuxt shopping</NuxtLink>
		</h1>
		<!-- <h1>{{ $route.name }}페이지</h1>
    <NuxtLink to="/">홈페이지</NuxtLink>
    <NuxtLink to="/main">메인 페이지</NuxtLink>
    <NuxtLink to="/product">상품 페이지</NuxtLink> -->
		<slot />
	</div>
</template>

<script>
export default {
	created() { },
}
</script>

<style></style>
