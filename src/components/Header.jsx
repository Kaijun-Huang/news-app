import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Sun } from "assets//sun.svg";
import { ReactComponent as Moon } from "assets/moon.svg";
import { ReactComponent as Globe } from "assets/globe.svg";
import { ReactComponent as Menu } from "assets/menu.svg";
import { ReactComponent as Search } from "assets/search.svg";
import { useFilter } from "context/filterContext";
import style from "./Header.module.scss";
import { useState } from "react";
import { UpperCaseCountryCode, getCountryName } from "./isoCountryCode";
import { CategoryContainer } from "./CategoryContainer";
import { SearchBarContainer } from "./SearchBar";
export const Header = () => {
  const { country, setCountry } = useFilter();
  const [lightMode, setLightMode] = useState(true);
  const CountryOptions = ({ className, countryCode }) => {
    return (
      <select
        defaultValue={countryCode}
        value={countryCode}
        className={className}
        name="country"
        id="country"
        onChange={(e) => setCountry(e.target.value)}
      >
        {UpperCaseCountryCode.map((countryCode, i) => {
          return (
            <option key={i} value={countryCode}>
              {getCountryName(countryCode)}
            </option>
          );
        })}
      </select>
    );
  };

  const switchMode = () => {
    const root = document.getElementById("root");
    lightMode
      ? root.setAttribute("data-theme", "dark")
      : root.setAttribute("data-theme", "light");
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
          <CategoryContainer className={style.categoryMobile} />
          <input
            type="checkbox"
            id="searchSwitch"
            className={style.searchSwitch}
          />
          <label htmlFor="searchSwitch">
            <Search className={`${style.search} ${style.icon}`} />
          </label>
          <SearchBarContainer className={style.searchBarMobile} />
        </div>
        <a href="/#" className={style.navbarLogo}>
          <Logo className={style.logo} />
          <span>即時新聞網</span>
        </a>
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
          <CountryOptions
            className={style.countrySelection}
            countryCode={country.toUpperCase()}
          />
        </div>
      </nav>
      <CategoryContainer className={style.categoryDesktop} />
    </>
  );
};
