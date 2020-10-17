import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './style.css';


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		{fetchedUser &&
			<PanelHeader>
				Привет, {`${fetchedUser.first_name}`}
			</PanelHeader>}

		<Group title="Переход на страницу пользователя">
			<Div>
			<Div align="center" style={{color: 'gray'}}>
				Данное приложение позволит вам найти своих соседей по дому и даже объединиться с ними в один чат!
          	</Div>
				<Button size="xl" onClick={go} data-to="search">
					Приступить к поиску соседей!
				</Button>
			</Div>
		</Group>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
