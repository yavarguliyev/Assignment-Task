import { makeStyles, Grid, ListItem, Typography, Link, Hidden, List, FormLabel } from '@material-ui/core';
import { Edit, Close, Add } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import RemovePhoto from '../modals/RemovePhoto';

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
    display: 'flex'
  },

  grid_left: {
    position: 'absolute',
    left: '0',
    right: '0',
  },

  grid_right: {
    position: 'relative',
    right: '0',
    marginLeft: 'auto',
    paddingRight: '0 !important',
    paddingLeft: '0 !important'
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },

  rules_list: {
    display: 'flex',
    flexDirection: 'column'
  },

  image_text: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px'
  },

  image: {
    maxWidth: '150px',
    maxHeight: '100px'
  },

  close_button: {
    color: 'white',
    position: 'absolute',
    right: '2px',
    top: '5px',
    backgroundColor: 'red',
    borderRadius: '50%'
  },

  image_parent: {
    position: 'relative',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    border: '1px solid #f9f5f5'
  },

  submit_button: {
    border: '1px dotted #E5E5E5'

  },

  list_parent: {
    width: '100vw',
    borderBottom: '1px solid #E5E5E5'
  }
}));

const Dashboard = () => {
  const rootStore = useContext(RootStoreContext);
  const { openModal } = rootStore.modalStore;
  const classes = useStyles()

  return (
    <Fragment>
      <Grid item xs={7} md={7} lg={7}>

        <List disablePadding>

          <ListItem>
            <List className={classes.container}>
              <ListItem>
                <Typography className={classes.header_text}>Перспективные захоронения</Typography>
              </ListItem>
              <ListItem className={classes.grid_right}>
                <Link href='#'>
                  <Edit className={classes.header_icon} />
                </Link>
              </ListItem>
            </List>
          </ListItem>

          <ListItem>
            <List className={classes.container}>
              <ListItem>
                <Typography className={classes.subhead_text}>ОБЩАЯ ИНФОРМАЦИЯ</Typography>
              </ListItem>
              <ListItem className={classes.grid_right}>
                <Link href='#'>
                  <Edit className={classes.header_icon} />
                </Link>
              </ListItem>
            </List>
          </ListItem>

        </List>

        <Hidden xsDown>
          <List disablePadding className={classes.list_parent}>

            <ListItem>
              <List className={classes.rules_list}>
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
              </List>

              <List className={classes.rules_list}>

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
              </List>
            </ListItem>

          </List>
        </Hidden>

        <List disablePadding>

          <ListItem>
            <List className={classes.container}>
              <ListItem>
                <Typography className={classes.subhead_text}>КОНТАКТНЫЕ ДАННЫЕ</Typography>
              </ListItem>
              <ListItem className={classes.grid_right}>
                <Link href='#'>
                  <Edit className={classes.header_icon} />
                </Link>
              </ListItem>
            </List>
          </ListItem>

        </List>

        <Hidden xsDown>
          <List disablePadding className={classes.list_parent}>

            <ListItem>
              <List className={classes.rules_list}>
                <ListItem>
                  <Typography className={classes.rules_text}>ФИО:</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.rules_text}>Телефон:</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.rules_text}>Эл. почта:</Typography>
                </ListItem>
              </List>

              <List className={classes.rules_list}>

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
              </List>
            </ListItem>

          </List>
        </Hidden>

        <List disablePadding>
          <Grid container spacing={0} style={{ justifyContent: 'space-between' }}>

            <Grid item xs={7} md={5} lg={3}>
              <ListItem>
                <List className={classes.image_parent}>
                  <ListItem>
                    <div className={classes.root}>
                      <img className={classes.image} src='../assets/images.jpg' alt='' />
                      <Link onClick={() => openModal(<RemovePhoto />)} href='#'>
                        <Close className={classes.close_button} />
                      </Link>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>Надгробный камень.jpg</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>11 июня 2018</Typography>
                  </ListItem>
                </List>
              </ListItem>
            </Grid>

            <Grid item xs={7} md={5} lg={3}>
              <ListItem>
                <List className={classes.image_parent}>
                  <ListItem>
                    <div className={classes.root}>
                      <img className={classes.image} src='../assets/images.jpg' alt='' />
                      <Link href='#'>
                        <Close onClick={() => openModal(<RemovePhoto />)} className={classes.close_button} />
                      </Link>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>Надгробный камень.jpg</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>11 июня 2018</Typography>
                  </ListItem>
                </List>
              </ListItem>
            </Grid>

            <Grid item xs={7} md={5} lg={3}>
              <ListItem>
                <List className={classes.image_parent}>
                  <ListItem>
                    <div className={classes.root}>
                      <img className={classes.image} src='../assets/images.jpg' alt='' />
                      <Link onClick={() => openModal(<RemovePhoto />)} href='#'>
                        <Close className={classes.close_button} />
                      </Link>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>Надгробный камень.jpg</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.image_text}>11 июня 2018</Typography>
                  </ListItem>
                </List>
              </ListItem>
            </Grid>

          </Grid>

          <Grid item xs={7} md={5} lg={3} style={{ border: '1px dotted #E5E5E5', marginLeft: '16px', marginRight: '16px' }}>
            <List disablePadding style={{ display: 'flex' }}>
              <ListItem>
                <Add style={{ color: '#82B284' }} />
                {/* <FormLabel htmlFor='file-input'>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</FormLabel> */}
                <input type='file' style={{ visibility: 'hidden' }} id='file-input' />
              </ListItem>
            </List>
          </Grid>

        </List>

      </Grid>
    </Fragment >
  )
}

export default observer(Dashboard);