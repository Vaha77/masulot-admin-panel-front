import styled from "styled-components";

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 0 32px;
  position: relative;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #e8e8e8;
`;

const Menu = styled.div`
  img {
    width: 20px;
    cursor: pointer;
  }
`;
const InputForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(82, 136, 193, 0.1);
  border: 1px solid #e4e4e4;
  border-radius: 23px;
  padding: 11px 24px;
  width: 500px;
  @media (max-width: 1100px) {
    width: 380px;
  }
  @media (max-width: 976px) {
    width: auto;
  }
  @media (max-width: 500px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 72px;
    padding: 8px 20px;
  }
  input {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #001869;
    border: none;
    outline: none;
    background: transparent;
    /* @media (max-width: 750px) {
      position: absolute;
      left: 50px;
      top: 75px;
      background: rgba(82, 136, 193, 0.1);
      border: 1px solid #e4e4e4;
      border-radius: 23px;
      padding: 5px 20px;
    } */
    /* display: none; */
  }
`;
const NavbarEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Bgflex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 976px) {
    width: 100%;
    position: absolute;
    left: 0;
    top: 75px;
    justify-content: space-between;
  }
`;

const Bg = styled.div`
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 0.3px solid #9f9f9f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Profil = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 0 3px 0 8px;
    cursor: pointer;
  }
`;

export { NavbarItem, Menu, InputForm, NavbarEnd, Bg, Profil, Bgflex };
