import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h1>404-not found</h1>
      <Link to="/">
        <h2>Back to Homepage</h2>
      </Link>
    </div>
  );
}
