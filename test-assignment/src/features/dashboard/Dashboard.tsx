import { makeStyles, Grid, ListItem, Typography, Link, Hidden, GridList, GridListTile } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  parent: {
    backgroundColor: '#FFFFFF !important',
    paddingBottom: '4rem',
    borderTop: '1px solid #E5E5E5'
  },

  header_text: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px'
  },

  subhead_text: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '20px'
  },

  rules_text: {
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '20px'
  },

  header_icon: {
    color: '#82B284;'
  },

  container: {
    position: 'relative',
    margin: '0 auto 20px auto',
  },

  grid_left: {
    position: 'absolute',
    left: '0',
    right: '0',
  },

  grid_right: {
    position: 'relative',
    right: '0',
    marginLeft: 'auto'
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Fragment>

      <Grid container className={classes.container} style={{ borderTop: '1px solid #E5E5E5' }}>

        <Grid item xs={2} md={6} lg={6} className={classes.grid_left}>
          <ListItem>
            <Typography className={classes.header_text}>Перспективные захоронения</Typography>
          </ListItem>
        </Grid>
        <Grid item xs={2} md={6} lg={6} className={classes.grid_right}>
          <ListItem>
            <Link href='#'>
              <Edit className={classes.header_icon} />
            </Link>
          </ListItem>
        </Grid>

      </Grid>

      <Grid container className={classes.container}>

        <Grid item xs={2} md={6} lg={6} className={classes.grid_left}>
          <ListItem>
            <Typography className={classes.subhead_text}>ОБЩАЯ ИНФОРМАЦИЯ</Typography>
          </ListItem>
        </Grid>
        <Grid item xs={2} md={6} lg={6} className={classes.grid_right}>
          <ListItem>
            <Link href='#'>
              <Edit className={classes.header_icon} />
            </Link>
          </ListItem>
        </Grid>

      </Grid>

      <Hidden xsDown mdDown>
        <Grid container className={classes.container}>

          <Grid item xs={2} md={6} lg={6} className={classes.grid_left}>

            <ListItem>
              <Typography className={classes.rules_text}>Полное название:</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Договор:</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Форма:</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Тип:</Typography>
            </ListItem>
          </Grid>

          <Grid item xs={2} md={6} lg={6} className={classes.grid_right}>
            <ListItem>
              <Typography className={classes.rules_text}>ООО Фирма “Перспективные захоронения”</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>12345 от 12.03.2015</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>ООО</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Агент, Подрядчик</Typography>
            </ListItem>
          </Grid>

        </Grid>
      </Hidden>

      <Grid container className={classes.container} style={{ borderTop: '1px solid #E5E5E5' }}>

        <Grid item xs={2} md={6} lg={6} className={classes.grid_left}>
          <ListItem>
            <Typography className={classes.subhead_text}>КОНТАКТНЫЕ ДАННЫЕ</Typography>
          </ListItem>
        </Grid>
        <Grid item xs={2} md={6} lg={6} className={classes.grid_right}>
          <ListItem>
            <Link href='#'>
              <Edit className={classes.header_icon} />
            </Link>
          </ListItem>
        </Grid>
      </Grid>

      <Hidden xsDown mdDown>
        <Grid container className={classes.container}>

          <Grid item xs={2} md={6} lg={6} className={classes.grid_left}>

            <ListItem>
              <Typography className={classes.rules_text}>ФИО:</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Телефон:</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>Эл. почта:</Typography>
            </ListItem>
          </Grid>

          <Grid item xs={2} md={6} lg={6} className={classes.grid_right}>
            <ListItem>
              <Typography className={classes.rules_text}>Григорьев Сергей Петрович</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.rules_text}>+7 (916) 216-55-88</Typography>
            </ListItem>
            <ListItem>
              <Link>
                <Typography className={classes.rules_text} style={{ color: '#82B284' }}>grigoriev@funeral.com</Typography>
              </Link>
            </ListItem>
          </Grid>

        </Grid>
      </Hidden>

      {/* <Grid container className={classes.container} style={{ borderTop: '1px solid #E5E5E5' }}>

        <Grid item xs={2} md={6} lg={6}>
          <div className={classes.root}>
            <img src='../assets/images.jpg' alt='' />
          </div>
        </Grid>

      </Grid> */}

    </Fragment >
  )
}

export default observer(Dashboard);