import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const value = {
    category,
    setCategory,
    country,
    setCountry,
    query,
    setQuery,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
