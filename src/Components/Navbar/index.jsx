import React, { useState, useRef } from "react";
import {
  NavbarItem,
  Menu,
  InputForm,
  NavbarEnd,
  Bg,
  Profil,
  Bgflex,
} from "./style";

import menuimg from "../../Assets/img/menu.svg";
import searchIcon from "../../Assets/img/search icon.svg";
import add from "../../Assets/img/add.svg";
import filter from "../../Assets/img/filter.svg";
import downloadUrl from "../../Assets/img/download_url.svg";
import profil from "../../Assets/img/profil.png";
// UserProfile
import UserProfile from "../userProfile";
import ProductsAdd from "../ProductsAdd";
const Navbar = ({ setActive, active }) => {
  const [hidden, setHidden] = useState(false);
  const [Productadd, setAdd] = useState(false);
  const [search, setSearch] = useState(false);
  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  const inputSearch = (e) => {
    setSearch(true);
    if (e.target.value === "") {
      setSearch(false);
    }
  };

  return (
    <>
      <NavbarItem>
        <Menu onClick={() => setActive(!active)}>
          <img src={menuimg} alt="menu" />
        </Menu>
        <InputForm active={active}>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search"
            name=""
            id=""
            onChange={inputSearch}
          />
          {search ? null : <img onClick={inputFocus} src={searchIcon} alt="" />}
        </InputForm>
        <NavbarEnd>
          <Bgflex>
            <Bg>
              <img onClick={() => setAdd(!Productadd)} src={add} alt="" />
            </Bg>
            <Bg>
              <img src={filter} alt="" />
            </Bg>
          </Bgflex>
          <Profil onClick={() => setHidden(!hidden)}>
            <img src={profil} alt="" />
            <h2>Musa Designer</h2>
            <img src={downloadUrl} alt="" />
          </Profil>
        </NavbarEnd>
      </NavbarItem>
      {hidden ? <UserProfile setHidden={setHidden} hidden={hidden} /> : ""}
      {Productadd ? <ProductsAdd setAdd={setAdd} add={add} /> : ""}
    </>
  );
};

export default Navbar;
