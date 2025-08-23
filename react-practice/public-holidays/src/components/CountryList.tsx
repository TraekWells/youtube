import React from "react";
import { fetchCountryList } from "../api/fetchCountryList";
import { useQuery } from "@tanstack/react-query";

type CountryListProps = {
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
};

const CountryList = ({
  selectedCountry,
  setSelectedCountry,
}: CountryListProps) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["country-list"],
    queryFn: fetchCountryList,
  });

  if (isError) {
    return <p>Error loading country list</p>;
  }

  return (
    <div className="form-group">
      <label htmlFor="paperSelects1">Select a country</label>
      {isPending ? (
        <p>Country List Loading</p>
      ) : (
        <select
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
          id="paperSelects1"
        >
          {data?.map((country) => {
            return (
              <option value={country.isoCode} key={country.isoCode}>
                {country.name[0].text}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default CountryList;
