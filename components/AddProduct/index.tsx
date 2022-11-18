import axios from 'axios';
import React,{useState} from 'react';
import { useProducts } from '../Products';

export interface IAddProductProps {
  goToList: any;
}

async function addProduct(product:any) {
  let response = await axios.post('/products', product);
  return response.data;
}

export default function AddProduct(props: IAddProductProps) {
  const {goToList} = props;
  const { products, mutate } = useProducts();
  const [product, setProduct] = useState({
    id: products.length + 1,
    name: '',
    price: null
  });
  const [disabled, setDisabled] = useState(true);

  async function handleAdd() {
    goToList();
    mutate(async () => {
      return [...products, await addProduct(product)]
    }, { optimisticData: [...products, product], rollbackOnError: true, revalidate: false } );
  }

  function handleFieldUpdate(e:any) {
    const element = e.target;
    const value = element.type === 'number' ? parseInt(element.value) : element.value;
    const nextProduct = {...product, [element.name]: value};

    setProduct(nextProduct);
    setDisabled(!nextProduct.name || !nextProduct.price);
  }
    
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoFocus
        onChange={handleFieldUpdate}/>
      <input
        type="number"
        name="price"
        min="1"
        placeholder="Price"
        onChange={handleFieldUpdate}/>
      <button onClick={handleAdd} disabled={disabled}>Add</button>
    </div>
  );
}
