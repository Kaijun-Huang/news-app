import style from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={style.searchBarContainer}>
      <input placeholder="想看什麼新聞?"></input>
      <button>搜尋</button>
    </div>
  );
};
