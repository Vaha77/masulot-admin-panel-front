import React from "react";
import { Link } from "react-router-dom";
import { Carddata } from "../../Mock/products";
import { Bodycard, BodyItem, Cardflex, CardText, Stars } from "./style";

const Body = ({ active }) => {
  return (
    <BodyItem active={active}>
      {Carddata.map((item) => {
        return (
          <Link to={`products/${item.id}`} key={item.id}>
            <Bodycard>
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
          </Link>
        );
      })}
    </BodyItem>
  );
};

export default Body;
