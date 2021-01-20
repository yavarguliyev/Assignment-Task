import { Link, makeStyles, List, ListItem, Hidden, Grid } from '@material-ui/core';
import { ArrowBack, Delete, Replay, Link as Links } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../app/layout/NotFound';
import PrivateRoute from '../../app/layout/PrivateRoute';
import Dashboard from '../dashboard/Dashboard';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  right_icons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  left_icons: {
    display: 'flex',
    justifyContent: 'flex-start'
  },

  links: {
    marginRight: '.5rem'
  },

  list_text: {
    color: '#82B284 !important',
    marginRight: '.5rem'
  }
}));

const RightNavBar: React.FC = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid item xs={7} md={7} lg={7} style={{ backgroundColor: '#fff' }}>
        <List disablePadding style={{ borderBottom: '1px solid #E5E5E5' }}>
          <List className={classes.grid}>
            <List disablePadding>
              <ListItem className={`${classes.list_text}`}>
                <Link href="#" className={`${classes.list_text}`}><ArrowBack /></Link>
                <Hidden xsDown mdDown>
                  <div className={`${classes.list_text}`}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</div>
                </Hidden>
              </ListItem>
            </List>

            <List disablePadding>
              <ListItem className={classes.right_icons}>
                <Link href='#' className={classes.links}>
                  <Links />
                </Link>
                <Link href='#' className={classes.links}>
                  <Replay />
                </Link>
                <Link href='#' className={classes.links}>
                  <Delete color={'secondary'} />
                </Link>
              </ListItem>
            </List>
          </List>
        </List>

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </Fragment >
  )
}

export default observer(RightNavBar);