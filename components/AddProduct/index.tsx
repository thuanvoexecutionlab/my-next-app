import React, { useState } from "react";
import { addProduct, useProducts } from "../../database";

export interface IAddProductProps {
  goToList: any;
}

export default function AddProduct(props: IAddProductProps) {
  const { goToList } = props;
  const { products, mutate } = useProducts();
  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    price: 0,
    image_url: "",
  });
  const [disabled, setDisabled] = useState(true);

  async function handleAdd() {
    let response = await addProduct(product);
    if (response.success) {
      mutate();
      goToList();
    }
  }

  function handleFieldUpdate(e: any) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setDisabled(
      !product.product_name ||
        !product.description ||
        !product.price ||
        !product.image_url
    );
  }
  console.log(product);

  return (
    <div>
      <input
        type="text"
        name="product_name"
        placeholder="Name"
        autoFocus
        onChange={handleFieldUpdate}
      />
      <input
        type="number"
        name="price"
        min="1"
        placeholder="Price"
        onChange={handleFieldUpdate}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleFieldUpdate}
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        onChange={handleFieldUpdate}
      />
      <button onClick={handleAdd} disabled={disabled}>
        Add
      </button>
    </div>
  );
}
