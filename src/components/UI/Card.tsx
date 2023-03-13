import React from "react";
import "./Card.css";

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card = (props: CardProps) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
