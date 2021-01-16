import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { RootStoreContext } from "../stores/rootStore";
import LoadingComponent from "./LoadingComponent";
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SideNavBar from "../../features/nav/SideNavBar";
import SideDashboardNavBar from "../../features/nav/SideDashboardNavBar";
import RightNavbar from "../../features/nav/RightNavbar";
import Dashboard from "../../features/dashboard/Dashboard";
import Footer from "../../features/footer/Footer";
import ModalContainer from "../common/modals/ModalContainer";
import HomePage from "../../features/home/HomePage";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },

  paper: {
    padding: theme.spacing(0),
  },

  papper_bootom: {
    paddingBottom: '10px'
  },
}));

const App = () => {
  const classes = useStyles()

  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, appLoaded } = rootStore.commonStrore;

  useEffect(() => {
    setAppLoaded();
  }, [setAppLoaded])

  if (!appLoaded) return <LoadingComponent content='Loading app...' />;

  return (
    <Fragment>
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route path={`/(.+)`} render={() => (
        <Fragment>
          <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={2} md={1} lg={1}>
              <Paper className={classes.paper}>
                <SideNavBar />
              </Paper>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <SideDashboardNavBar />
              </Paper>
            </Grid>
            <Grid item xs={6} md={7} lg={7}>
              <Paper className={`${classes.paper}`}>
                <RightNavbar />
              </Paper>
              <Paper className={classes.paper}>
                <Switch>
                  <Route component={Dashboard} />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.grid} >
            <Grid item xs={12} md={12} lg={12}>
              <Footer />
            </Grid>
          </Grid>
        </Fragment>
      )} />
    </Fragment>
  );
}

export default withRouter(observer(App));
