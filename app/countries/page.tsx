import Link from 'next/link';
import React from 'react';

export default async function Countries() {
  const apikey = process.env.COUNTRYIO_API;
  const fetchData = await fetch(`https://countryapi.io/api/all?apikey=${apikey}`);
  const res = await fetchData.json();
  console.log(Array.isArray(res));

  // Get the country keys and sort them alphabetically
  const countryKeys = Object.keys(res).sort((a, b) => res[a].name.localeCompare(res[b].name));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Countries List</h1>
        <ul className="space-y-4">
          {countryKeys.map((key) => (
            <li key={key} className="border-b pb-2">
              <Link href={`/countries/${key}`}>
                <div className="text-blue-500 hover:underline">{res[key].name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
