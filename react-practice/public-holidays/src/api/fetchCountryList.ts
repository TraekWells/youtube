import type { CountryTypes } from "../types/types";

export const fetchCountryList = async (): Promise<CountryTypes[]> => {
  const response = await fetch(
    "https://openholidaysapi.org/Countries?languageIsoCode=en"
  );
  if (!response.ok) {
    throw new Error("Error while fetching data");
  }
  return response.json();
};
