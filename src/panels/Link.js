import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
// VK Bridge
import bridge from '@vkontakte/vk-bridge';
// VK Icons
import Icon24Add from '@vkontakte/icons/dist/28/add_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
// VKUI
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

let link = '0';

async function getLink() {
	bridge.send("VKWebAppCallAPIMethod", {
	"method": "messages.getInviteLink",
	"params": {
		"peer_id": 2000000013,
		"v": "5.92",
		"reset": "0",
		"group_id": "199535896",
		"access_token": "4b5146699477839ed4ac3e363c9dcd9f6932039a34d1fab2b6806fe26fd915b43642744248d4802d650f7",
	},
	}).then(data => {
		link = data.response.link;
	  });
};

getLink();

const osName = platform();

const Link = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="search">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
  		Мы нашли ваших соседей!
		</PanelHeader>
			<Group header={<Header mode="secondary">Домовые чаты</Header>}>
			<Div style={{color: 'gray'}}>
				Пользователи уже сделали общедомовой чат до Вас:
        	</Div>
                <Cell description={"2 участника"} before={ <Avatar size={40} src={"https://vk.com/images/community_200.png"} /> }>Белгород, проспект Славы, дом 52</Cell>
			<Div align="center">
       		<Button before={<Icon24Add/>} size="l" target="_blank" href={`${link}`}>Присоединиться</Button>
     		</Div>
			 </Group>
	</Panel>
);


Link.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Link;