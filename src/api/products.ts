import { api } from './api';

const getAllProducts = async () => {
  const res = await api.get<IProductsResponse>('/products');

  return res;
};

const getProductById = async (id: number) => {
  const res = await api.get<IProduct>(`/products/${id}`);
  return res;
};

export { getAllProducts, getProductById };
