import React, { useState, useEffect } from "react";
import { getProduct } from "../../database";
import { Item } from "../../components/Products/styles";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";

export interface IProductDetailProps {
  id: string;
}

export default function ProductDetail(props: IProductDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({
    _id: "",
    product_name: "",
    description: "",
    price: 0,
    image_url: "",
  });

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await getProduct(id as string);
      if (response.success) {
        setProduct(response.data);
      }
    };
    getProductDetail();
  }, [id]);

  return (
    <>
      <NextSeo
        title={product.product_name}
        description={product.description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          title: product.product_name,
          description: product.description,
          images: [
            {
              url: product.image_url,
              width: 800,
              height: 600,
              alt: product.product_name,
            },
          ],
          site_name: product.product_name,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <div>
        <Item>
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
              <p>{product.description}</p>
            </div>
          </div>
        </Item>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  return {
    props: { id },
  };
}