import React from "react";
import "./Atom.css";

const Atom = ({linkName}) => {
  return (
    <div className="link">
      <p className="link-text">{linkName}</p>
    </div>
  );
};

export default Atom;
