import Link from "next/link";
import React from "react";
import Image from "next/image";

type CountryDetails = {
  name: string;
  capital: string;
  population: number;
  region: string;
  flag: {
    small: string;
    medium: string;
    large: string;
  };
};

export default async function Country({
  params,
}: {
  params: { country: string };
}) {
  const apikey = process.env.COUNTRYIO_API;
  const fetchData = await fetch(
    `https://countryapi.io/api/all?apikey=${apikey}`
  );
  const res = await fetchData.json();

  // Access the country details using the country code from params
  const countryDetails: CountryDetails = res[params.country.toLowerCase()];

  if (!countryDetails) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <div className="flex flex-col items-center justify-center gap-8 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold">Country Detail</h1>
          <p className="text-red-500">Country not found</p>
          <Link href="/countries">
            <div className="text-blue-500 hover:underline">Back to Countries</div>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-8 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold">Country Detail</h1>
        <p className="text-lg"><strong>Name:</strong> {countryDetails.name}</p>
        <p className="text-lg"><strong>Capital:</strong> {countryDetails.capital}</p>
        <p className="text-lg"><strong>Population:</strong> {countryDetails.population}</p>
        <p className="text-lg"><strong>Region:</strong> {countryDetails.region}</p>
        <Image
          src={countryDetails.flag.medium}
          alt={`${countryDetails.name} flag`}
          width={100}
          height={100}
          className="rounded-md shadow-md"
        />
        <Link href="/countries">
          <div className="text-blue-500 hover:underline">Back to Countries</div>
        </Link>
      </div>
    </main>
  );
}
