import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
// VKUI
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
// VK Icons
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Search = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
            Поиск дома
		</PanelHeader>
    <FormLayout>
      <FormLayoutGroup top="Введите адрес вашего дома:">
	  <Input type="text" defaultValue={`${fetchedUser.country.title}`} />
      {fetchedUser && <Input type="text" defaultValue={`${fetchedUser.city.title}`} />}
        <Input type="text" defaultValue="Улица" />
        <Input type="text" defaultValue="Дом" />
      </FormLayoutGroup>
    </FormLayout>
    <Div>
		<Button size="l" onClick={go} data-to="final">
					Поиск
		</Button>
	</Div>
	</Panel>
);


Search.propTypes = {
	id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        country: PropTypes.shape({
			title: PropTypes.string,
		}),
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Search;