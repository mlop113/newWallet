import * as React from "react";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import {
	createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

// here is our redux-aware smart component
function ReduxNavigation(props) {
  const { dispatch, nav } = props;
	const addListener = createReduxBoundAddListener("root");
  return <AppNavigation navigation={{
	  dispatch: dispatch,
	  state: nav,
	  addListener,
  }} />
}

const mapStateToProps = (state) => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
