import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { RootStoreContext } from "../stores/rootStore";
import LoadingComponent from "./LoadingComponent";
import { Grid } from '@material-ui/core';
import SideNavBar from "../../features/nav/SideNavBar";
import SideDashboardNavBar from "../../features/nav/SideDashboardNavBar";
import RightNavbar from "../../features/nav/RightNavbar";
import Footer from "../../features/footer/Footer";
import ModalContainer from "../common/modals/ModalContainer";
import HomePage from "../../features/home/HomePage";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, appLoaded, token } = rootStore.commonStrore;

  useEffect(() => {
    if (token) {
      setAppLoaded();
    } else {
      setAppLoaded();
    }
  }, [setAppLoaded, token])

  if (!appLoaded) return <LoadingComponent content='Loading app...' />;

  return (
    <Fragment>
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route path={`/(.+)`} render={() => (
        <Fragment>
          <Grid container spacing={0}>
            <SideNavBar />
            <SideDashboardNavBar />
            <RightNavbar />
            <Footer />
          </Grid>
        </Fragment>
      )} />
    </Fragment>
  );
}

export default withRouter(observer(App));
