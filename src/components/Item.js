import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "react-bootstrap";

const Item = (props) => {
  const {
    onClick,
    productData: { cover, name, coast, description },
  } = props;
  const context = useContext(AppContext);

  const handleClick = () => {
    context.setActivePanel("productView");
  };

  return (
    <Card
      bg="primary"
      key={1}
      text="white"
      style={{ width: "100%" }}
      className="mb-2"
      onClick={handleClick}
    >
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
