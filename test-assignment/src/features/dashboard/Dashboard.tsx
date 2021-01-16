import { Grid, makeStyles, Paper } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    height: '90vh',
    backgroundColor: '##FFFFFF !important'
  },

  paper: {
    padding: theme.spacing(1),
    borderColor: '#E5E5E5'
  },
}));

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.parent}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default observer(Dashboard);