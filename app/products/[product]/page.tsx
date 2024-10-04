import React from "react";
import Link from "next/link";
export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.product}`
  );
  const res = await fetchData.json();
  console.log(params.product);

  return (
    <>
      <h1>Product Details</h1>
      <p>{res.id}</p>
      <p>{res.title}</p>
      <p>{res.body}</p>
      <div>
      <Link href="/products">Back to Products</Link>
      </div>    
    </>
  );
}
