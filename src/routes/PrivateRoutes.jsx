import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoutes;
