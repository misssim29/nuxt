<template>
    <div>
        <div class="container">
            <div class="main-panel">
                <img class="product-image" src="~/assets/background-demo.jpg" :alt="product.name" />
            </div>
            <div class="side-panel">
                <p class="name">{{ product.name }}</p>
                <p class="price">{{ product.price }}</p>
                <button type="button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchProductById } from '~/api/index.js';

export default {
    data() {
        return {
            product: '',
        }
    },
    async created() {
        await fetchProductById(this.$route.params.id)
            .then((res) => {
                this.product = res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        addToCart() {
            // this.$store.commit('addCartItem', this.product);
            this.$router.push('/cart');
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}

.product-image {
    width: 500px;
    height: 375px;
}

.side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
}
</style>