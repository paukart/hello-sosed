import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import bridge from '@vkontakte/vk-bridge';

import './style.css';

bridge.send("VKWebAppInit");

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Привет, Сосед!</PanelHeader>

		<Group title="Navigation Example">
			<Div>
			<Div className="main">
				Данное приложение позволит вам найти своих соседей по дому и даже объединиться с ними в один чат!
          	</Div>
				<Button size="xl" onClick={bridge.send("VKWebAppShowWallPostBox", {"message": "Hello!"})} data-to="Search">
					Начать
				</Button>
			</Div>
		</Group>
	</Panel>
);


export default Home;
