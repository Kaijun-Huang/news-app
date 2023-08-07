import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {
  const [country, setCountry] = useState("tw");
  const [category, setCategory] = useState("General");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("zh");
  const value = {
    category,
    setCategory,
    country,
    setCountry,
    query,
    setQuery,
    language,
    setLanguage,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
