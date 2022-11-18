import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

export interface IProductsProps {
}

async function fetcher(url: any) {
  const res = await axios.get(url);
  return res.data;
}

export const useProducts = () => {
  const { data, error, mutate } = useSWR('/products', fetcher);
  return {
    products: data,
    isLoading: !data,
    isError: !!error,
    mutate
  };
}

export default function Products (props: IProductsProps) {
 const { products, isLoading, isError } = useProducts();
  if(isError)
    return (
      <div>Unable to fetch products.</div>
    );

  if(isLoading)
    return (
      <div>Loading products...</div>
    );

  return (
    products.map((product:any) => (
      <div key={product.id} className="product-item">
        <div>{product.name}</div>
        <div>${product.price}</div>
      </div>
    ))
  );
}
