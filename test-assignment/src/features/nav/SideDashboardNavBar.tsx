import { List, makeStyles, ListItem, Link, Typography, Paper, Hidden, Grid } from '@material-ui/core';
import { LocationCity } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F7F7F7 !important',
    height: '100%'
  },

  header_text: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#3B3B3B',
    lineHeight: '25.6px',
    letterSpacing: '3%',
    style: 'normal'
  },

  subhead_text: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#3B3B3B',
    lineHeight: '19.2px',
    letterSpacing: '0.2px',
    style: 'normal',
  },

  sidebar_menu_icon: {
    color: '#82B284',
    fontWeight: 400,
    fontSize: '24px',
    marginRight: '1rem'
  },

  sidebar_menu_text: {
    color: '#82B284',
    fontWeight: 400,
  },

  papper: {
    width: '100%',
    backgroundColor: '#EEEEEE'
  },
}));

const SideDashboardNavBar = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid item xs={4} md={4} lg={4}>
        <List disablePadding className={`${classes.parent}`}>
          <List>
            <ListItem>
              <Link href='#' className={classes.header_text}>ЧЕСТНЫЙ АГЕНТ</Link>
            </ListItem>
            <ListItem>
              <Link href='#' className={classes.subhead_text}>МЕНЕДЖЕР ПРОЦЕССА</Link>
            </ListItem>
          </List>
          <Paper className={classes.papper}>
            <List>
              <ListItem>
                <Link href='#' className={`${classes.sidebar_menu_icon}`}><LocationCity /></Link>
                <Hidden xsDown mdDown>
                  <Typography className={`${classes.sidebar_menu_text}`} variant='h5'>Организации</Typography>
                </Hidden>
              </ListItem>
            </List>
          </Paper>
        </List>
      </Grid>
    </Fragment>
  )
}

export default observer(SideDashboardNavBar);
