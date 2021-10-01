import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../enums/enum-routes';

export default function PageNotFound() {
  return (
    <div>
      <h1>404-not found</h1>
      <Link to={ROUTE.HOME}>
        <h2>Back to Homepage</h2>
      </Link>
    </div>
  );
}
