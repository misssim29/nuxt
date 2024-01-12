import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.baseURL,
});

function fetchProductById(id) {
    return instance.get(`/products/${id}`);
}

function fetchProducts() {
    return instance.get(`/products`);
}

export { fetchProductById, fetchProducts };
