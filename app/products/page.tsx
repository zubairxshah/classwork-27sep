import React from "react";
import Product from "./[product]/page";
import Link from "next/link";
export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();

  return (
    <div>
      <h3>Product List</h3>
      <ol>
        {res.map((item: any, i: number) => {
          return (
            <li>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
