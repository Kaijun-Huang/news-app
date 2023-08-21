import { useState } from "react";
import style from "./Header.module.scss";
import { useFilter } from "context/filterContext";
import { ReactComponent as X } from "assets/cross-svgrepo-com.svg";

export const SearchBarContainer = ({ className }) => {
  const [keyword, setKeyword] = useState("");
  const { setQuery } = useFilter();
  return (
    <div className={`${style.searchBarContainer} ${className}`}>
      <div className={`${style.searchBar}`}>
        <input
          placeholder="想看什麼新聞?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <X className={style.X} onClick={() => setKeyword("")} />
        <button
          onClick={() => {
            if (keyword.length === 0) return;
            setQuery(keyword);
          }}
        >
          搜尋
        </button>
      </div>
    </div>
  );
};
