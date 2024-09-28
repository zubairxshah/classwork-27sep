import React from "react";
import Link from "next/link";
export default function Product({params}: {params:{product:string}}) {
  
  console.log(params.product);

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.product}</p>
      <Link href="/products">Back to Products</Link>
    </>
  );
}
