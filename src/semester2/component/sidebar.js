import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <main>
        <Menu {...props}>
            <NavLink to="/semester2/ID">Interaction Design</NavLink>
            <NavLink to="/semester2/CS">Computer Science</NavLink>
            <NavLink to="/semester2/UX">User Experience</NavLink>
            <NavLink to="/">Landing-Page</NavLink>
        </Menu>
    </main>
  );
};
