import axios from "axios";
import useSWR from "swr";

export async function fetcher(url: string) {
  const res = await axios.get(url);
  return res.data;
}

export async function addProduct(product: any) {
  let response = await axios.post("/product", product);
  return response.data;
}

export async function deleteProduct(id: string) {
    let response = await axios.delete(`/product/${id}`);
    return response.data;
}

export async function updateProduct(product: any) {
    let response = await axios.put(`/product/${product.id}`, product);
    return response.data;
}

export const useProducts = () => {
  const { data, error, mutate } = useSWR("/products", fetcher);
  return {
    products: data,
    isLoading: !data,
    isError: !!error,
    mutate,
  };
};
