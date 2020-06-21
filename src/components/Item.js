import React from 'react';
import {Group, CardGrid, Card} from '@vkontakte/vkui';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';

const Item = (props) => {
  return (
    <Group>
      <Card size="l" mode="outline">
        <div style={{ height: 200, overflow: 'hidden', position: 'relative', borderRadius: 8 }} >
          <img width='100%' src='https://sun9-41.userapi.com/impf/c850624/v850624204/3bd13/egumRJFFvmk.jpg?size=520x0&quality=90&sign=6247c7fa72c2b11f89865889e655d87b'/>
          <div style={{color: '#fff', position: 'absolute', top: 5, right: 5}}>
          <Icon28FavoriteOutline/>
          </div>
        </div>
      </Card>
  </Group>
  );
};

export default Item;