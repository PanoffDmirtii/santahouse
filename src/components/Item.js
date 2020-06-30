import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "react-bootstrap";

const Item = (props) => {
  const { onClick } = props;
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
      <Card.Img
        variant="top"
        src="https://sun9-69.userapi.com/impf/c855432/v855432199/149ee3/0hB4wtXBytc.jpg?size=520x0&quality=90&sign=c0af08c888b570f1dc6145369e10603e"
      />
      <Card.Body>
        <Card.Title>Light</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
