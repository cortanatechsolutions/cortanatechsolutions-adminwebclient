import React from "react";
import { Link } from "react-router-dom";

const ErrorPage404: React.FC = () => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but the page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorPage404;
