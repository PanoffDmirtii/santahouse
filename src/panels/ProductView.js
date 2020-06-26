import {
  Card,
  CardScroll,
  Div,
  Group,
  InfoRow,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SimpleCell,
} from "@vkontakte/vkui";
import React, { useContext } from "react";
import { AppContext } from "../App";
import Item from "../components/Item";

export const ProductView = (props) => {
  const { id } = props;
  const context = useContext(AppContext);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack onClick={() => context.setActivePanel("products")} />
        }
      >
        Какой то товар
      </PanelHeader>
      <Div>
        <Item />
        <Group
          separator="hide"
          description="Рекомендуемый размер карточки — 144px"
        >
          <CardScroll>
            <Card size="s">
              <div style={{ width: 144, height: 96, background: "#0066ff" }} />
            </Card>
            <Card size="s">
              <div style={{ width: 144, height: 96, background: "#0066ff" }} />
            </Card>
            <Card size="s">
              <div style={{ width: 144, height: 96, background: "#0066ff" }} />
            </Card>
            <Card size="s">
              <div style={{ width: 144, height: 96, background: "#0066ff" }} />
            </Card>
          </CardScroll>
        </Group>
      </Div>
      <Group>
        <SimpleCell>
          <InfoRow header="Цена">1500 р</InfoRow>
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell>
          <InfoRow header="Описание товара">info about product</InfoRow>
        </SimpleCell>
      </Group>
    </Panel>
  );
};
