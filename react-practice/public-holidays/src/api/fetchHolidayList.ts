import type { HolidayListTypes } from "../types/types";

const year = new Date().getFullYear();

export const fetchHolidayList = async (
  country: string
): Promise<HolidayListTypes[]> => {
  const response = await fetch(
    `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=${year}-01-01&validTo=${year}-12-31&languageIsoCode=en&subdivisionCode=DE-BE`
  );
  if (!response.ok) {
    throw new Error("Error loading holiday list");
  }
  return response.json();
};
