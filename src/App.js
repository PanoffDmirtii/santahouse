import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
import { Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui/';
import '@vkontakte/vkui/dist/vkui.css';
import React, { createContext, useState } from 'react';
import { Backet } from './panels/Backet';
import { Decoration } from './panels/Decoration';
import { Products } from './panels/Products';
import { Profile } from './panels/Profile';
import './style.css';
import { DecorationView } from './panels/DecorationView';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';

export const AppContext = createContext();


const App = () => {
	const [activeStory, setActiveStory] = useState('profile')
	const [activePanel, setActivePanel] = useState('')
	console.log(activePanel);
	
	const handleTabb = (tab) => {
		setActiveStory(tab)
		setActivePanel(tab)
	}


	return (
		<AppContext.Provider value={{setActivePanel: setActivePanel}}>
		<Epic activeStory={activeStory} tabbar={
			<Tabbar>
				<TabbarItem
					onClick={() => handleTabb('profile')}
					selected={activeStory === 'profile'}
					data-story="profile"
					text="Профиль"
				><Icon28UserCircleOutline /></TabbarItem>
				<TabbarItem
					onClick={() => handleTabb('products')}
					selected={activeStory === 'products'}
					data-story="products"
					text="Товары"
				><Icon28PictureStackOutline /></TabbarItem>
				<TabbarItem
					onClick={() => handleTabb('decoration')}
					selected={activeStory === 'decoration'}
					data-story="decoration"
					text="Дома"
				><Icon28HomeOutline /></TabbarItem>
				<TabbarItem
					onClick={() => handleTabb('backet')}
					selected={activeStory === 'backet'}
					data-story="backet"
					label="12"
					text="Корзина"
				><Icon28MarketOutline/></TabbarItem>
			</Tabbar>
		}>
			<View id="profile" activePanel="profile">
				<Profile id="profile"/>
			</View>
			<View id="products" activePanel="products">
				<Products id='products'/>
			</View>
			<View id="backet" activePanel="backet">
				<Backet id='backet'/>
			</View>
			<View id="decoration" activePanel={activePanel}>
				<Decoration id='decoration' />
				<DecorationView id='decorationView'/>

			</View>
		</Epic>
		{/* <View activePanel={activePanel}>
		<DecorationView id='decorationView'/>
		</View> */}
		</AppContext.Provider>
	)
}

export default App;

