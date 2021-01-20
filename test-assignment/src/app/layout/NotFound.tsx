import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Grid, List, ListItem } from '@material-ui/core';
import { Button, Header, Icon } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Fragment>
      <Grid item xs={7} md={7} lg={7}>
        <List disablePadding>
          <ListItem>
            <Header icon><Icon size='tiny' name="search" />Opps - we've looked everywhere but couldn't find this.</Header>
          </ListItem>
          <ListItem>
            <Button as={Link} to='/dashboard' primary>Return to Dashboard page</Button>
          </ListItem>
        </List>
      </Grid>
    </Fragment>
  )
}

export default NotFound;