import React from "react";
import { Panel, PanelHeader, Group, Cell, SimpleCell, Avatar } from "@vkontakte/vkui";

export const Profile = (props) => {
  const { id, user } = props;
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <SimpleCell>
          <Avatar size={100} src={user.photo_200} />
        </SimpleCell>
        <Cell>
          {user.first_name} {user.last_name}
        </Cell>
      </Group>
    </Panel>
  );
};
