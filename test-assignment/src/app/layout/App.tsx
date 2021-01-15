import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import Dashboard from "../../features/dashboard/Dashboard";
import Footer from "../../features/footer/Footer";
import HomePage from "../../features/home/HomePage";
import RightNavbar from "../../features/nav/RightNavbar";
import SideDashboardNavBar from "../../features/nav/SideDashboardNavBar";
import SideNavBar from "../../features/nav/SideNavBar";
import ModalContainer from "../common/modals/ModalContainer";
import { RootStoreContext } from "../stores/rootStore";
import LoadingComponent from "./LoadingComponent";

const App: React.FC<RouteComponentProps> = () => {
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
          <Container fluid>
            <Grid>
              <Grid.Column largeScreen={1} widescreen={1}>
                <SideNavBar />
              </Grid.Column>
              <Grid.Column largeScreen={4} widescreen={1}>
                <SideDashboardNavBar />
              </Grid.Column>
              <Grid.Column largeScreen={11} widescreen={1}>
                <RightNavbar />
                <Switch>
                  <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column largeScreen={16} widescreen={16}>
                <Footer />
              </Grid.Column>
            </Grid>
          </Container>
        </Fragment>
      )} />
    </Fragment>
  );
}

export default withRouter(observer(App));
