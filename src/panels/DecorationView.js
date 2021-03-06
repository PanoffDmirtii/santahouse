import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Group,
  CardScroll,
  Card,
  SimpleCell,
  InfoRow,
} from "@vkontakte/vkui";
import React, { useContext } from "react";
import { AppContext } from "../App";
import { DecorationItem } from "../components/DecorationItem";

export const DecorationView = (props) => {
  const { id } = props;
  const context = useContext(AppContext);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack
            onClick={() => context.setActivePanel("decoration")}
          />
        }
      >
        Какой то дом
      </PanelHeader>
      <Div>
        <DecorationItem />
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