import React, { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      Oops... Page not found.
      <NavLink to="/">Go to the main page</NavLink>
    </>
  )
}

export default NotFoundPage;