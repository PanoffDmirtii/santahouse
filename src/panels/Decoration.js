import React, { useContext } from "react";
import { Panel, PanelHeader, Div } from "@vkontakte/vkui";
import { DecorationItem } from "../components/DecorationItem";

export const Decoration = (props) => {
  const { id } = props;

  return (
    <Panel id={id}>
      <PanelHeader>Украшения домов</PanelHeader>
      <Div>
        <DecorationItem />
        <DecorationItem />
        <DecorationItem />
        <DecorationItem />
        <DecorationItem />
        <DecorationItem />
        <DecorationItem />
      </Div>
    </Panel>
  );
};
