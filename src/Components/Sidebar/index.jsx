import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./style";
import { sidebarPages, ProductsPanel } from "../../Utils/sidebar";

import logo from "../../Assets/logo/logo.svg";
import cancel from "../../Assets/img/cancel.svg";

const Sidebar = ({ active, setActive }) => {
  return (
    <>
      <Container hidden={active}>
        <div className="cancel">
          <img onClick={() => setActive(false)} src={cancel} alt="" />
        </div>
        <img src={logo} className={"logo"} alt="" />
        <Container.Title>Mahsulotlar paneli</Container.Title>
        <Container.Links>
          {ProductsPanel.map((item) => {
            return (
              <NavLink
                key={item.id}
                className={'link'}
                style={({ isActive }) => ({ backgroundColor: isActive ? '#001869' : 'white', color: isActive ? 'white' : '#001869' })}
                to={item.path} >
                <img src={item.icon} alt="" />
                <p className="title">{item.title}</p>
              </NavLink>
            );
          })}
        </Container.Links>
        <Container.Title>Sahifalar</Container.Title>
        <Container.Links>
          {sidebarPages.map((item) => {
            return (
              <NavLink
                key={item.id}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#001869" : "white",
                  color: isActive ? "white" : "#001869",
                })}
                className={"link"}
                to={item.path}
              >
                <img src={item.icon} alt="" />
                <p className="title">{item.title}</p>
              </NavLink>
            );
          })}
        </Container.Links>
      </Container>
      <Outlet />
    </>
  );
};

export default Sidebar;
