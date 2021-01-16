import { Link, makeStyles, List, ListItem, Hidden } from '@material-ui/core';
import { ArrowBack, Delete, Replay, Link as Links } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    height: '10vh',
    backgroundColor: '#FFFFFF !important'
  },

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

  link: {
    marginRight: '.5rem'
  },

  links: {
    marginRight: '.5rem'
  },

  list_text: {
    color: '#82B284 !important'
  }
}));

const RightNavBar: React.FC = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <List disablePadding className={`${classes.parent}`}>
        <List className={classes.grid}>
          <List disablePadding>
            <ListItem className={`${classes.list_text}`}>
              <Link href="#" className={`${classes.link}, ${classes.list_text}`}><ArrowBack /></Link>
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
    </Fragment >
  )
}

export default observer(RightNavBar);