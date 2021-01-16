import { List, makeStyles, Grid, ListItem } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    maxHeight: '90vh',
    backgroundColor: '#FFFFFF !important',
    paddingBottom: '4rem'
  },
}));

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <List disablePadding className={`${classes.parent}`}>
        <Grid item xs={6} md={6} lg={6}>
          <ListItem></ListItem>
        </Grid>
      </List>
      <List disablePadding className={`${classes.parent}`}>
        <Grid item xs={6} md={6} lg={6}>

        </Grid>
      </List>
      <List disablePadding className={`${classes.parent}`}>
        <Grid item xs={6} md={6} lg={6}>

        </Grid>
      </List>
    </Fragment>
  )
}

export default observer(Dashboard);