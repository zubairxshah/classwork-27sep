import React from 'react';

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

export default async function Country({ params }: { params: { country: string } }) {
  const apikey = process.env.COUNTRYIO_API;
  const fetchData = await fetch(`https://countryapi.io/api/all?apikey=${apikey}`);
  const res = await fetchData.json();

  // Access the country details using the country code from params
  const countryDetails: CountryDetails = res[params.country];

  if (!countryDetails) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1>Country Detail</h1>
          <p>Country not found</p>
          <a href="/countries">Back to Countries</a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1>Country Detail</h1>
        <p>Name: {countryDetails.name}</p>
        <p>Capital: {countryDetails.capital}</p>
        <p>Population: {countryDetails.population}</p>
        <p>Region: {countryDetails.region}</p>
        <img src={countryDetails.flag.medium} alt={`${countryDetails.name} flag`} />
        <a href="/countries">Back to Countries</a>
      </div>
    </main>
  );
}
