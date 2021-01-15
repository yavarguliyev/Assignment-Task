import { observer } from 'mobx-react-lite';
import React from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SideNavBar: React.FC = () => {
  return (
    <Sidebar.Pushable as={Segment} className='sidebar-left'>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        width='thin' style={{ backgroundColor: '#82B284' }}>
        <div className='sidebar-icons-parent'>
          <div className='sidebar-icons-up'>
            <Menu.Item as='a'><Icon name='home' /></Menu.Item>
            <Menu.Item as='a'><Icon name='archive' /></Menu.Item>
            <Menu.Item as='a'><Icon name='search' /></Menu.Item>
          </div>
          <div className='sidebar-icons-down'>
            <Menu.Item as='a'><Icon name='settings' /></Menu.Item>
            <Menu.Item as='a'><Icon name='chat' /></Menu.Item>
            <Menu.Item as='a'><Icon name='download' /></Menu.Item>
          </div>
        </div>
      </Sidebar>
    </Sidebar.Pushable>
  )
}

export default observer(SideNavBar);