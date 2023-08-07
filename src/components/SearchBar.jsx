import { useState } from "react";
import style from "./Header.module.scss";
import { useFilter } from "context/filterContext";

export const SearchBarContainer = ({ className }) => {
  const [keyword, setKeyword] = useState("");
  const { setQuery, setLanguage } = useFilter();

  return (
    <div className={`${style.searchBarContainer} ${className}`}>
      <input
        placeholder="想看什麼新聞?"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <select
        defaultValue="zh"
        name="language"
        id="language"
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="es">Espanol</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="zh">中文</option>
      </select>
      <button onClick={() => setQuery(keyword)}>搜尋</button>
    </div>
  );
};
