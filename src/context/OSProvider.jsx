import PropTypes from "prop-types";
import OSContext from "./OsContext";
import { useState } from "react";

const OSPovider = ({ children }) => {
  const [folders, setFolders] = useState([]);

  const OSValues = {
    folders,
  };

  return <OSContext.Provider value={OSValues}>{children}</OSContext.Provider>;
};

OSPovider.propTypes = {
  children: PropTypes.array,
};

export default OSPovider;
