import { ListItem, List, makeStyles, Link } from '@material-ui/core';
import { Home, Settings, Search, Chat, GetApp, StoreMallDirectory } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  icons: {
    color: theme.palette.common.white,
    marginBottom: '1rem'
  },

  icons_size: {
    fontSize: '30px',
    color: 'white'
  },

  parent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#82B284 !important'
  }
}));

const SideNavBar = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <List disablePadding className={`${classes.parent}`}>
        <List>
          <ListItem>
            <Link href='#'>
              <Home className={classes.icons_size} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#'>
              <StoreMallDirectory className={classes.icons_size} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#'>
              <Search className={classes.icons_size} />
            </Link>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Link href='#'>
              <Settings className={classes.icons_size} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#'>
              <GetApp className={classes.icons_size} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#'>
              <Chat className={classes.icons_size} />
            </Link>
          </ListItem>
        </List>
      </List>
    </Fragment>
  )
}

export default observer(SideNavBar);