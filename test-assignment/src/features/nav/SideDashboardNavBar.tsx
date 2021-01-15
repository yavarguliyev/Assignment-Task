import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Item, Menu, Segment, Sidebar } from 'semantic-ui-react';

const SideDashboardNavBar: React.FC = () => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible>
      </Sidebar>
      <Header as='h4' icon textAlign='center'>
        <Header.Content>ЧЕСТНЫЙ АГЕНТ</Header.Content>
      </Header>
      <Header as='h5' disabled icon textAlign='center'>
        <Header.Content>МЕНЕДЖЕР ПРОЦЕССА</Header.Content>
      </Header>
      <Item.Group divided>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Link to=''><Icon name='building' style={{ color: '#82B284' }} /></Link>
                </Item.Content>
                <Item.Content>
                  <Header as='h3' disabled style={{ color: '#82B284' }}>Организации</Header>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment.Group>
      </Item.Group>
    </Sidebar.Pushable>
  )
}

export default observer(SideDashboardNavBar);
