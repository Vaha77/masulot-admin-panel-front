import styled from "styled-components";

const BodyItem = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ active }) => (active ? 5 : 6)}, 1fr);
  gap: 32px;
  padding: 0 10px;
  background: #e8e8e8;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(${({ active }) => (active ? 4 : 5)}, 1fr);
  }

  @media (max-width: 976px) {
    grid-template-columns: repeat(${({ active }) => (active ? 3 : 4)}, 1fr);
    margin-top: 20px;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(${({ active }) => (active ? 2 : 3)}, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Bodycard = styled.div`
  background: #ffffff;
  transition: All 0.3s linear;
  & > img {
    width: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  }
`;
const CardText = styled.div`
  padding: 6px 24px 15px 6px;
  @media (max-width: 420px) {
    padding: 6px 15px 15px 6px;
  }
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #001869;
    opacity: 0.8;
    @media (max-width: 420px) {
      font-size: 11px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding: 4px 0 6px;
    @media (max-width: 420px) {
      font-size: 7px;
      line-height: 9px;
    }
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    padding-top: 11px;
    @media (max-width: 420px) {
      font-size: 10px;
    }
  }
`;
const Cardflex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: #5288c1;
    @media (max-width: 420px) {
      font-size: 7px;
      line-height: 10px;
    }
  }
`;
const Stars = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export { BodyItem, Bodycard, Cardflex, CardText, Stars };
