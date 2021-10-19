import React from 'react';
import Link from 'next/link';
import { ROUTE } from '../../enums/enum-routes';
import { Title } from './page-not-found.styled';

export default function PageNotFound() {
  return (
    <div>
      <h1>404-not found</h1>
      <Link href={ROUTE.HOME}>
        <Title>Back to Homepage</Title>
      </Link>
    </div>
  );
}
