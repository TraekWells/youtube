import React from "react";
import CountryList from "./components/CountryList";
import HolidayList from "./components/HolidayList";

const App = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("NL");

  return (
    <div className="paper container container-sm">
      <CountryList
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <HolidayList selectedCountry={selectedCountry} />
    </div>
  );
};

export default App;
