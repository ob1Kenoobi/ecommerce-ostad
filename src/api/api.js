import axios from "axios";

const API_BASE = "https://ecom-rs8e.onrender.com/api"; // Adjust this if different

export const fetchProducts = () => axios.get(`${API_BASE}/products`);
export const fetchProduct = (id) => axios.get(`${API_BASE}/products/${id}`);
export const addToCart = (item) => axios.post(`${API_BASE}/cart`, item);
export const getCart = () => axios.get(`${API_BASE}/cart`);
export const removeFromCart = (id) => axios.delete(`${API_BASE}/cart/${id}`);
