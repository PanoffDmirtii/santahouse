import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "react-bootstrap";

export const DecorationItem = () => {
  const context = useContext(AppContext);
  const handleClick = () => {
    context.setActivePanel("decorationView");
  };

  return (
    <Card
      bg="info"
      key={1}
      text="white"
      style={{ width: "100%" }}
      className="mb-2"
      onClick={handleClick}
    >
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Img
        variant="top"
        src="https://sun9-26.userapi.com/c857416/v857416725/d65b4/T8PeuTLKcAc.jpg"
      />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
