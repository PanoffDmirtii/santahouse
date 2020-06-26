import React from "react";
import { Panel, PanelHeader, Group, Cell } from "@vkontakte/vkui";

export const Profile = (props) => {
  const { id } = props;
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Cell description="VKontakte">Дмитрий Панов</Cell>
      </Group>
    </Panel>
  );
};
