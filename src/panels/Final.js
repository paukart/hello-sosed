import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
// VK Bridge
import bridge from '@vkontakte/vk-bridge';
// VK Icons
import Icon16UserAdd from '@vkontakte/icons/dist/16/user_add';
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
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
import List from '@vkontakte/vkui/dist/components/List/List';
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

const Final = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="search">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}>
  		Мы нашли ваших соседей!
		</PanelHeader>
			<Group header={<Header mode="secondary">Создать чат</Header>}>
			<Div style={{color: 'gray'}}>
				Следующие пользователи у вас в друзьях уже заходили в наше приложение, если кто-то из них ваш сосед, поставьте отметку и мы также добавим его в Ваш домовой чат:
        	</Div>
              <List>
                <Cell selectable before={ <Avatar size={40} src={"https://sun1-27.userapi.com/impg/Ph5aApHVJ74CsjdB426m2jIk-rT1J9WOJs_-0Q/ommv_G77wxE.jpg?size=200x0&quality=88&crop=664,656,823,823&sign=5a14d0ef6383eaada9d93681b8cd3fa3&c_uniq_tag=s--z-iZVQYImWCbxQFfpyg2JTQw4FxB-Aejc8I-TF8Q&ava=1"} /> }>Яна Соболева</Cell>
                <Cell selectable before={ <Avatar size={40} src={"https://sun1-87.userapi.com/impg/ynJAbqp9iPGKAEueKgxp10Islb01aQgMFBnWGQ/pBfjy278KnQ.jpg?size=200x0&quality=88&crop=183,546,636,636&sign=131f2a2132fc3517acc30a75bfe9e229&c_uniq_tag=FEzSTtqfEPFuFa_ne93Jhb-PaBS_LM7ysOlyqFmqkOo&ava=1"} /> }>Александр Гревцев</Cell>
                <Cell selectable before={ <Avatar size={40} src={"https://sun1-23.userapi.com/impf/c851328/v851328830/132d93/fCxej5LIn6Y.jpg?size=200x0&quality=88&crop=0,72,682,682&sign=714c8fa76534442c408473eed6f4ee62&c_uniq_tag=K7vb7Zf6n7Lgu8gYIANY5mNOcRB8fC8ObwxURznbnRg&ava=1"} /> }>Юрий Галдун</Cell>
              </List>
			<Div align="center">
       		<Button before={<Icon28WriteSquareOutline/>} size="l" target="_blank" href={`${link}`}>Создать</Button>
     		</Div>
			 </Group>
			<Group header={<Header mode="secondary">Возможные соседи</Header>}>
			<Div style={{color: 'gray'}}>
				Пользователи ниже искали соседей в вашем доме, если Вы знаете кого-то из них, нажмите на кнопку «Добавить» и мы уведомим их о том, что в вашем доме появился общий чат.
        	</Div>
              <List>
                <Cell
                  before={<Avatar src={"https://sun1-18.userapi.com/impg/FGKC6mj-HVCNW5-JWr8BxlhmF1oizpKCEcYWZw/2nbYzXd-4sw.jpg?size=200x0&quality=88&crop=1493,751,687,687&sign=99e73a9f8c52f9e379a04c5032077d02&c_uniq_tag=FfKkpnB60O5zD6Xfe_XXEsJ4qljIjrsWcX0TyqMbJoo&ava=1"} size={72} />}
                  size="l"
                  description="Искал соседей в вашем доме"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" before={<Icon16UserAdd />}>Добавить</Button>
                    </div>
                  }
                >
                  Костенко Артем</Cell>
                <Cell
                  before={<Avatar src={"https://sun1-85.userapi.com/impf/c852124/v852124593/33abd/osfTip3AWkU.jpg?size=200x0&quality=88&crop=97,381,1458,1458&sign=96e486c650086d39c48e82dfb342059e&c_uniq_tag=CXjqcYbaXGzriiIm_J3RWXv6ZNA36lvZcuVAHPE9Lq4&ava=1"} size={72} />}
                  size="l"
                  description="Искал соседей в вашем доме"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" before={<Icon16UserAdd />}>Добавить</Button>
                    </div>
                  }
                >
                  Владислав Кальченко</Cell>
                <Cell
                  before={<Avatar src={"https://sun1-87.userapi.com/impf/Hs5hfOl3fHg1mZoenBtTxgjiPMW-7y1lBUBeKQ/-T_eBivkoAE.jpg?size=200x0&quality=88&crop=70,70,562,562&sign=5f46eda8e6fee0f00d48e960ca4115b0&c_uniq_tag=tHn3XMWPR73qEXB7PrGwzlNIRUZ3ALgfmxkTn5XhGVk&ava=1"} size={72} />}
                  size="l"
                  description="Искал соседей в вашем доме"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" before={<Icon16UserAdd />}>Добавить</Button>
                    </div>
                  }
                >
                  Дмитрий Задохин</Cell>
              </List>
            </Group>
	</Panel>
);


Final.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Final;