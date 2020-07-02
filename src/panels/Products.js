import {
  Card,
  CardScroll,
  Group,
  Panel,
  PanelHeader,
  Div,
} from "@vkontakte/vkui";
import React from "react";
import Item from "../components/Item";
import { Stock } from "../components/Stock";
import { Filter } from "../components/Filter";
import { PopularItem } from "../components/PopularItem";

export const Products = (props) => {
  const { id, products } = props;

  return (
    <Panel id={id}>
      <PanelHeader>Товары</PanelHeader>
      <Group separator="hide" description="Акции">
        <CardScroll>
          <Stock />
          <Stock />
          <Stock />
          <Stock />
          <Stock />
        </CardScroll>
      </Group>

      <Group separator="hide" description="Популярные">
        <PopularItem />
      </Group>
      <Group description="Фильтр">
        <Filter />
      </Group>
      <Div>
        {products && products.map( (item, index) => <Item productData={item} key={index}/>)}
      </Div>
    </Panel>
  );
};
