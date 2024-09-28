import React from "react";
import Product from "./[product]/page";
import Link from "next/link";
export default function Products() {

  return (
    <div>
      <h1>Product List</h1>
      <ol>
        <li>
          <Link href="/products/product1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/product2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/product3">Product 3</Link>
        </li>
      </ol>
    </div>
  );
}
