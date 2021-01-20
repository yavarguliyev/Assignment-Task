import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Image, Button } from "semantic-ui-react";
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';

const HomePage = () => {
  const token = window.localStorage.getItem('jwt');
  const rootStore = useContext(RootStoreContext);
  const { isLoggedin, user } = rootStore.commonStrore;
  const { openModal } = rootStore.modalStore;

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} /> Test Assignment
    </Header>
        {isLoggedin && user && token ?
          (<Fragment>
            <Header as="h2" inverted content={`Welcome to back ${user.displayName}`} />
            <Button as={Link} to={`/dashboard`} size="huge" inverted>
              Go to activities!
          </Button>
          </Fragment>) :
          (<Fragment>
            <Header as="h2" inverted content="Welcome to Test Assignment" />
            <Button onClick={() => openModal(<LoginForm />)} size="huge" inverted>
              Login
          </Button>
          </Fragment>)
        }
      </Container>
    </Segment>
  )
}

export default HomePage;