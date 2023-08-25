import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {
  const [country, setCountry] = useState("zh-CN");
  const [category, setCategory] = useState("");
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
