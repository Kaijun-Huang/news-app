import logo from "assets/logo.svg";
import sun from "assets/sun.svg";
import moon from "assets/moon.svg";
import globe from "assets/globe.svg";
import menu from "assets/menu.svg";
import search from "assets/search.svg";
import { useFilter } from "context/filterContext";
import style from "./Header.module.scss";
import { Fragment, useState } from "react";
import { UpperCaseCountryCode, getCountryName } from "./isoCountryCode";
import { CategoryContainer } from "./CategoryContainer";
export const Header = () => {
  const { country, setCountry, setQuery, setLanguage } = useFilter();
  const [keyword, setKeyword] = useState("");

  const SearchBarContainer = ({ className }) => {
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
        {UpperCaseCountryCode.map((countryCode) => {
          return (
            <option value={countryCode}>{getCountryName(countryCode)}</option>
          );
        })}
      </select>
    );
  };
  return (
    <>
      <nav>
        <div className={style.searchAndMenu}>
          <input type="checkbox" id="menuSwitch" className={style.menuSwitch} />
          <label htmlFor="menuSwitch">
            <img
              className={`${style.menu} ${style.icon}`}
              src={menu}
              alt="menu"
            />
          </label>
          <CategoryContainer className={style.categoryMobile} />
          <input
            type="checkbox"
            id="searchSwitch"
            className={style.searchSwitch}
          />
          <label htmlFor="searchSwitch">
            <img
              className={`${style.search} ${style.icon}`}
              src={search}
              alt="search"
            />
          </label>
          {/* <SearchBarContainer className={style.searchBarMobile} /> */}
          <div
            className={`${style.searchBarContainer} ${style.searchBarMobile}`}
          >
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
        </div>
        <a href="/#" className={style.navbarLogo}>
          <img className={style.logo} src={logo} alt="logo" />
          <span>即時新聞網</span>
        </a>
        {/* <SearchBarContainer className={style.searchBarDesktop} /> */}
        <div
          className={`${style.searchBarContainer} ${style.searchBarDesktop}`}
        >
          <input
            placeholder="想看什麼新聞?"
            onClick={(e) => console.log(e.target)}
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
        <div className={style.navbarItems}>
          <input
            type="checkbox"
            id="countrySwitch"
            className={style.countrySwitch}
          />
          <label htmlFor="countrySwitch">
            <img
              className={`${style.globe} ${style.icon}`}
              src={globe}
              alt="globe"
            />
          </label>
          <img className={`${style.sun} ${style.icon}`} src={sun} alt="sun" />
          <img
            className={`${style.moon} ${style.icon}`}
            src={moon}
            alt="moon"
          />
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
