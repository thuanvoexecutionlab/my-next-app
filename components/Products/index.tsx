import React, { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { formatDate } from "../../functions/format";
import AddIcon from "@mui/icons-material/Add";
import {
  Grid,
  Item,
  ModalComponent,
  StyledFab,
  StyledField,
  StyledForm,
} from "./styles";
import { Formik } from "formik";
import {
  addProduct,
  deleteProduct,
  updateProduct,
  useProducts,
} from "../../database";
import { error } from "console";

export interface IProductsProps {}

export interface IProductData {
  _id: string;
  product_name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: number;
  updated_at: number;
}

export interface IProduct {
  success?: boolean;
  data?: IProductData[];
}

export default function Products(props: IProductsProps) {
  const { products, isLoading, isError, mutate } = useProducts();
  const [open, setOpen] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const [editProduct, setEditProduct] = useState<IProductData | null>(null);

  if (isError) return <div>Unable to fetch products.</div>;

  if (isLoading) return <div>Loading products...</div>;

  const handleOpen = (product: any, title: string) => {
    setEditProduct(product);
    setOpen(true);
    setTitleModal(title);
  };

  const handleDelete = async () => {
    const response = await deleteProduct(editProduct?._id||"");
    if (response.success) {
      mutate();
      handleClose();
    }
  };

  console.log(editProduct);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Grid>
          {products.success &&
            products.data.map((product: IProductData) => (
              <Item key={product._id}>
                <div className={"row"}>
                  <Image
                    src={product.image_url}
                    alt={product.product_name}
                    width={120}
                    height={120}
                  />
                  <div>
                    <h2>{product.product_name}</h2>
                    <p>${product.price}</p>
                  </div>
                </div>
                <p>Create at: {formatDate(product.created_at)}</p>
                <p>Update at: {formatDate(product.updated_at)}</p>
                <Button
                  onClick={handleOpen.bind(null, product, "Edit Product")}
                >
                  Edit
                </Button>
                <Button
                  onClick={handleOpen.bind(null, product, "Delete Product")}
                  color="error"
                >
                  Delete
                </Button>
              </Item>
            ))}
        </Grid>
        <ModalComponent
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className={"modal"}>
            <h1>{titleModal}</h1>
            {(titleModal !== "Delete Product" && (
              <Formik
                initialValues={{
                  product_name: editProduct?.product_name,
                  price: editProduct?.price,
                  description: editProduct?.description,
                  image_url: editProduct?.image_url,
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  const data = {
                    id: editProduct?._id,
                    product_name: values.product_name,
                    price: values.price,
                    description: values.description,
                    image_url: values.image_url,
                  };
                  if (titleModal === "Edit Product") {
                    const response = await updateProduct(data);
                    setSubmitting(false);
                    if (response.success) {
                      mutate();
                      handleClose();
                    }
                  } else {
                    const response = await addProduct(data);
                    setSubmitting(false);
                    if (response.success) {
                      mutate();
                      handleClose();
                    }
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <StyledForm>
                    <StyledField
                      type="text"
                      name="product_name"
                      placeholder="Product Name"
                    />
                    <StyledField
                      type="text"
                      name="description"
                      placeholder="Description"
                    />
                    <StyledField type="text" name="price" placeholder="Price" />
                    <StyledField
                      type="text"
                      name="image_url"
                      placeholder="Image URL"
                    />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </StyledForm>
                )}
              </Formik>
            )) || (
              <div className={"delete"}>
                <h2>Are you sure you want to delete this product?</h2>
                <div className={"buttons"}>
                  <Button onClick={handleClose} color="error">
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} color="success">
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ModalComponent>
      </div>
      <StyledFab
        onClick={handleOpen.bind(null, null, "Add Product")}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </StyledFab>
    </>
  );
}
