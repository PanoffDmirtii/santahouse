import React, { useState } from 'react';
import { CardScroll, Card } from '@vkontakte/vkui';

export const Filter = () => {
  const [active, setActive] = useState([]);

  const handleActiveFilter = (event) => {
    const { color, background } = event.target.style
    event.target.style.background = background === 'rgb(26, 115, 232)' ? 'rgb(255, 255, 255)' : 'rgb(26, 115, 232)'
    event.target.style.color = color === 'rgb(0, 0, 0)' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
  }

  return (
    <CardScroll >
      <Card size='s' mode='outline'>
        <div style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Уличное освещение
        </div>
      </Card>
      <Card size='s'>
        <div style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Интерьер
        </div>
      </Card>
      <Card size='s'>
        <div style={{ background: '#000', height: 60, color: '#fff', borderRadius: 8, width: 2, textAlign: 'center' }}></div>
      </Card>
      <Card size='s'>
        <div
          style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Бахрома
        </div>
      </Card>
      <Card size='s'>
        <div
          style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Нити
        </div>
      </Card>
      <Card size='s'>
        <div
          style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Лента
        </div>
      </Card>
      <Card size='s'>
        <div
          style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Зановес
        </div>
      </Card>
      <Card size='s'>
        <div
          style={{ height: 50, color: '#000', borderRadius: 8, width: 100, textAlign: 'center' }}
          onClick={handleActiveFilter}
        >
          Фигуры
        </div>
      </Card>
    </CardScroll>
  );
};
