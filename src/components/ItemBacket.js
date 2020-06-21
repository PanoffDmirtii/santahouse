import React from 'react';
import { Card, Group } from '@vkontakte/vkui';
import Icon24DismissSubstract from '@vkontakte/icons/dist/24/dismiss_substract';

export const ItemBacket = (props) => {
  const {onClick, item} = props;
  return (
    <Group>
    <Card size="l" mode="outline">
      <div style={{height: 75, display: 'flex'}}>
        <div>
        <img width='100' src='https://sun9-37.userapi.com/impf/c850128/v850128265/5c4d8/UGvLCAoZvNQ.jpg?size=520x0&quality=90&sign=e3b602d959e8c56a6317d29146d8ad97' style={{borderRadius: '8px'}}/>
        </div >
        <div style={{display: 'flex', flexDirection: 'column', padding: '5px 20px'}}>
          <span style={{color: '#000'}}>Название товара</span>
          <span style={{fontSize: '28px', color: '#000', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '0 20px'}}>
          - 2 +
        </span>
        </div>
        <div style={{color: '#000', padding: '15px', fontSize: 28}}>
          1500 &#8381;
        </div>
          <Icon24DismissSubstract onClick={() => onClick(item)}/>
      </div>
    </Card>
    </Group>
  );
};
