import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {FormLayoutGroup, FormLayout, Input} from '@vkontakte/vkui';

const osName = platform();

const Search = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
            Search
		</PanelHeader>
    <FormLayout>
      <FormLayoutGroup top="Фамилия">
        <Input type="text" defaultValue="Петров" />
        <Input type="text" defaultValue="Иванов" align="center" />
        <Input type="text" defaultValue="Сидоров" align="right" />
      </FormLayoutGroup>
    </FormLayout>
	</Panel>
);

Search.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Search;