import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ol className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
        </li>
      </ol>
    </nav>
  );
}
