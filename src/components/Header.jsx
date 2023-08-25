import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Sun } from "assets//sun.svg";
import { ReactComponent as Moon } from "assets/moon.svg";
import { ReactComponent as Globe } from "assets/globe.svg";
import { ReactComponent as Menu } from "assets/menu.svg";
import { ReactComponent as Search } from "assets/search.svg";
import { useFilter } from "context/filterContext";
import style from "./Header.module.scss";
import { useEffect, useState } from "react";
import { CategoryContainer } from "./CategoryContainer";
import { SearchBarContainer } from "./SearchBar";

export const Header = () => {
  const initialMode = JSON.parse(localStorage.getItem("lightMode"));
  const localLightMode = initialMode === null ? true : initialMode;
  const [lightMode, setLightMode] = useState(localLightMode);
  const { country, setCountry } = useFilter();
  useEffect(() => {
    const root = document.getElementById("root");
    lightMode
      ? root.setAttribute("data-theme", "light")
      : root.setAttribute("data-theme", "dark");
  }, [lightMode]);

  const CountryOptions = ({ className }) => {
    return (
      <select
        defaultValue={country}
        className={className}
        name="country"
        id="country"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="en-GB">United Kingdom</option>
        <option value="es-US">United States</option>
        <option value="en-CA">Canada </option>
        <option value="en-IN">India </option>
        <option value="ja-JP">Japan</option>
        <option value="zh-CN">台灣</option>
      </select>
    );
  };

  const switchMode = () => {
    const root = document.getElementById("root");
    if (lightMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("lightMode", false);
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("lightMode", true);
    }
    setLightMode(!lightMode);
  };

  return (
    <>
      <nav>
        <div className={style.searchAndMenu}>
          <input type="checkbox" id="menuSwitch" className={style.menuSwitch} />
          <label htmlFor="menuSwitch">
            <Menu className={`${style.menu} ${style.icon}`} />
          </label>
          {/* Mobile category */}
          <CategoryContainer className={style.categoryMobile} />
          <input
            type="checkbox"
            id="searchSwitch"
            className={style.searchSwitch}
          />
          <label htmlFor="searchSwitch">
            <Search className={`${style.search} ${style.icon}`} />
          </label>
          {/* Mobile searchBar */}
          <SearchBarContainer className={style.searchBarMobile} />
        </div>
        <a href="/#" className={style.navbarLogo}>
          <Logo className={style.logo} />
          <span>即時新聞網</span>
        </a>
        {/* Desktop searchBar */}
        <SearchBarContainer className={style.searchBarDesktop} />
        <div className={style.navbarItems}>
          <input
            type="checkbox"
            id="countrySwitch"
            className={style.countrySwitch}
          />
          <label htmlFor="countrySwitch">
            <Globe className={`${style.globe} ${style.icon}`} />
          </label>
          {lightMode ? (
            <Moon
              className={`${style.moon} ${style.icon}`}
              onClick={switchMode}
            />
          ) : (
            <Sun
              className={`${style.sun} ${style.icon}`}
              onClick={switchMode}
            />
          )}
          <CountryOptions className={style.countrySelection} />
        </div>
      </nav>
      {/* Desktop category */}
      <CategoryContainer className={style.categoryDesktop} />
    </>
  );
};
