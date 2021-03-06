import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const GuestRoute = (props) => {
  const {
    layout: Layout,
    component: Component,
    isAuthenticated,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          {!isAuthenticated ? (
            <Component {...matchProps} />
          ) : (
            <Redirect to="/home" />
          )}
        </Layout>
      )}
    />
  );
};

GuestRoute.propTypes = {
  layout: PropTypes.any,
  path: PropTypes.string.isRequired,
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

export default connect(mapStateToProps, null)(GuestRoute);
