import { makeStyles, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    height: '20vh',
    backgroundColor: '#FFFFFF !important',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },

  footer_hedar_text: {
    fontSize: '12px',
    fontWeight: 400,
    font: 'Proxima Nova',
    color: '#B9B9B9',
    lineHeight: '16px',
    style: 'normal',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid>
        <Grid container spacing={0} className={classes.parent}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant='h6' className={classes.footer_hedar_text}>© 1992 - 2020 Честный Агент © Все права защищены.</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.footer_hedar_text}>8 (495) 150-21-12</Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default observer(Footer);