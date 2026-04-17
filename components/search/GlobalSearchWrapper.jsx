'use client';

import { Suspense } from 'react';
import GlobalSearch from './GlobalSearch';

export default function GlobalSearchWrapper() {
  return (
    <Suspense fallback={null}>
      <GlobalSearch />
    </Suspense>
  );
}