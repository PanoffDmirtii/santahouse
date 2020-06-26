import React, { useContext } from 'react';
import {Group, Card} from '@vkontakte/vkui'
import { AppContext } from '../App';

export const DecorationItem = () => {

  const context = useContext(AppContext);
  const handleClick = () => { 
    context.setActivePanel('decorationView')
  }

  return (
    <Group>
      <Card size="l" mode="outline" onClick={handleClick}>
        <div style={{ height: 200, overflow: 'hidden', position: 'relative', borderRadius: 8 }} >
          <img width='100%' src='https://sun9-26.userapi.com/c857416/v857416725/d65b4/T8PeuTLKcAc.jpg'/>
        </div>
      </Card>
  </Group>
  );
};

