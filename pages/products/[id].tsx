import React, { useState, useEffect } from "react";
import { getProduct } from "../../database";
import { Item } from "../../components/Products/styles";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";

export interface IProductDetailProps {
  data: any;
}

export default function ProductDetail(props: IProductDetailProps) {
  const { data } = props;
  console.log(data);
  // const router = useRouter();

  // const { id } = router.query;
  // const [product, setProduct] = useState({
  //   _id: "",
  //   product_name: "",
  //   description: "",
  //   price: 0,
  //   image_url: "",
  // });

  // useEffect(() => {
  //   const getProductDetail = async () => {
  //     const response = await getProduct(id as string);
  //     if (response.success) {
  //       setProduct(response.data);
  //     }
  //   };
  //   getProductDetail();
  // }, [id]);

  return (
    <>
      <NextSeo
        title={data?.product_name}
        description={data?.description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          title: data?.product_name,
          description: data?.description,
          images: [
            {
              url: data?.image_url,
              width: 800,
              height: 600,
              alt:  data?.product_name,
            },
          ],
          site_name: data?.product_name,
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
              src={data?.image_url}
              alt={data?.product_name}
              width={120}
              height={120}
            />
            <div>
              <h2>{data?.product_name}</h2>
              <p>${data?.price}</p>
              <p>{data?.description}</p>
            </div>
          </div>
        </Item>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const response = await getProduct(id);
  if (response.success) {
    return {
      props: {
        data: response.data,
      },
    };
  }
};