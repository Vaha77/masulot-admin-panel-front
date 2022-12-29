import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ hidden }) => (hidden ? "350px" : "0px")};
  overflow: ${({ hidden }) => (hidden ? "auto" : "hidden")};
  background-color: white;
  padding: ${({ hidden }) => (hidden ? "30px" : "0px")};
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ hidden }) => (hidden ? "0px" : "-200%")});
  .cancel {
    img {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 20px;
      cursor: pointer;
      display: none;
      @media (max-width: 500px) {
        display: block;
      }
    }
  }

  @media (max-width: 500px) {
    width: 225px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    > img {
      width: 80%;
    }
  }
`;
Container.Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  opacity: 0.5;
  margin: 20px 0 10px 0;
`;
Container.Links = styled.div`
  display: flex;
  flex-direction: column;
  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 40px;
    padding: 12px 10px;
    transition: 0.3s;
    img {
      width: 15px;
    }
    .title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: "#001869";
      line-height: 24px;
      margin-left: 10px;
    }

    :hover {
      background-color: #001869 !important;
      .title {
        color: white;
      }
    }
    border-radius: 4px;
    }
    border-radius: 4px;
  }
`;
export { Container };
