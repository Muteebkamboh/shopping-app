import axios from "axios";
const baseURL="https://fakestoreapi.com"

export const fetchProductsApi = async () => {
  const response = await axios.get(`${baseURL}/products`);
  return response.data; 
};

export const fetchProductByIdApi = async (id) => {
  const response = await axios.get(`${baseURL}/products${id}`);
  return response.data;
} 