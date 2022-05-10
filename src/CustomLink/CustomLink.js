import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="px-3 py-0">
      <Link className={match && "btn btn-accent text-white"} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
