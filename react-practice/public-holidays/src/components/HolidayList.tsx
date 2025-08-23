import { useQuery } from "@tanstack/react-query";
import { fetchHolidayList } from "../api/fetchHolidayList";

type HolidayListProps = {
  selectedCountry: string;
};

const HolidayList = ({ selectedCountry }: HolidayListProps) => {
  const { data, isPending, isError } = useQuery({
    queryKey: [selectedCountry],
    queryFn: () => fetchHolidayList(selectedCountry),
  });

  if (isError) {
    return <p>Error loading country list</p>;
  }

  return (
    <>
      {isPending ? (
        <p>Loading holiday list</p>
      ) : (
        <ul>
          {data.map((holiday) => {
            return <li key={holiday.id}>{holiday.name[0].text}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default HolidayList;
