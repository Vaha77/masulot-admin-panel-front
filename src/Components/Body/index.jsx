import React from "react";
import { Carddata } from "../../Mock/products";
import { Bodycard, BodyItem, Cardflex, CardText, Stars } from "./style";

const Body = ({active}) => {
  return (
    <BodyItem active={active}>
      {Carddata.map((item) => {
        return (
          <Bodycard key={item.id}>
            <img src={item.img} alt="" />
            <CardText>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Cardflex>
                <Stars>
                  {[1, 2, 3, 4, 5].map((_, i) => {
                    return <img key={i} src={item.stars} alt="" />;
                  })}
                </Stars>
                <span>{item.residual}</span>
              </Cardflex>
              <h3>{item.price}</h3>
            </CardText>
          </Bodycard>
        );
      })}
    </BodyItem>
  );
};

export default Body;
