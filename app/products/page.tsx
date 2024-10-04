import React from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();

  return (
    <div>
      <h3>Product List</h3>
      <ol>
        {res.map((item: Post, i: number) => {
          return (
            <li key={i}>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
