import React, { useState } from "react";
import { Panel, PanelHeader } from "@vkontakte/vkui";
import { ItemBacket } from "../components/ItemBacket";

export const Backet = (props) => {
  const { id } = props;
  const [data, setData] = useState([1, 2, 3]);

  const handleRemoveItem = () => {
    setData(data.slice(0, data.length - 1));
  };

  return (
    <Panel id={id}>
      <PanelHeader>Корзина</PanelHeader>
      {data.map((item) => (
        <ItemBacket key={item} onClick={handleRemoveItem} />
      ))}
    </Panel>
  );
};
