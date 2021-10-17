import React from 'react';
import { PageNotFound } from '../components/page-not-found';
import { GlobalStyles } from '../components/app/app.styled';

export default function NotFound() {
  return (
    <>
      <GlobalStyles />
      <PageNotFound />
    </>
  );
}
