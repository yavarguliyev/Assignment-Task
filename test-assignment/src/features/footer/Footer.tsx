import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Footer: React.FC = () => {
  return (
    <Container className='footer-text'>
      <div style={{ marginBottom: 10, marginTop: 5, paddingTop: 5 }}>
        <Header as='h6' disabled>© 1992 - 2020 Честный Агент © Все права защищены.</Header>
      </div>
      <div style={{ paddingBottom: 5 }}>
        <Header as='h6' disabled>8 (495) 150-21-12 </Header>
      </div>
    </Container>
  )
}

export default observer(Footer);