import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { DecorationItem } from '../components/DecorationItem';

export const DecorationView = (props) => {
  const {id} = props;
  const context = useContext(AppContext)
  

  return (
    <Panel id={id}>
      <PanelHeader
      left={<PanelHeaderBack onClick={ () => context.setActivePanel('decoration')} />}
      > Какой то дом</PanelHeader>
      <DecorationItem />
    </Panel>
  );
};

