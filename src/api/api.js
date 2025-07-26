import axios from "axios";

const BASE_URL = "https://ecom-rs8e.onrender.com/api";
//const TOKEN = "<PUT_YOUR_VALID_JWT_TOKEN_HERE>";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhMGExN2IwOWY3NTFiZDIyMzlkMjgiLCJmaXJzdF9uYW1lIjoiTWVza2F0dWwiLCJsYXN0X25hbWUiOiJJc2xhbSIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmUiOiIwMTc1NDY1ODc4MSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwiYXZhdGFyX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzkxMjYwMj92PTQiLCJjaXR5IjoiQ2hhdHRvZ3JhbSIsInJvbGUiOjEsImlhdCI6MTc1MzUwNjk1NSwiZXhwIjoxNzU0MTExNzU1fQ.RGitZV5wEeui_xQNIH3SJXxwOb8IgQsA5fl7YPc59no";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: TOKEN,
  },
});

export const fetchProducts = () => axiosInstance.get("/products");
export const fetchProduct = (id) => axiosInstance.get(`/products/id/${id}`);
export const createProduct = (data) => axiosInstance.post("/product", data);
export const updateProduct = (id, data) =>
  axiosInstance.patch(`/products/${id}`, data);
export const deleteProduct = (id) => axiosInstance.delete(`/products/${id}`);

export const addToCart = (productId) =>
  axiosInstance.post("/cart", { product: productId });
export const getCart = () => axiosInstance.get("/cart");
export const removeFromCart = (id) => axiosInstance.delete(`/cart/${id}`);
