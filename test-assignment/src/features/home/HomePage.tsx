import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Image, Button } from "semantic-ui-react";

const HomePage = () => {

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} /> Dashboard
      </Header>
        <Fragment>
          <Header as="h2" inverted content={`Welcome to back Admin`} />
          <Button as={Link} to={`/dashboard`} size="huge" inverted>
            Go to Dashboard!
            </Button>
        </Fragment>
      </Container>
    </Segment>
  )
}

export default HomePage;