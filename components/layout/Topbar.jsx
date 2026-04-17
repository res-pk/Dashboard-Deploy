'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  defaultPortfolioFilter,
  getPortfolioFilterLabel,
  pmRoutes,
  portfolioFilters,
  titles
} from '@/modules/dashboard/config';
import GlobalSearchWrapper from '@/components/search/GlobalSearchWrapper';

export default function Topbar({ slug }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const portfolio =
    searchParams.get('portfolio') || defaultPortfolioFilter;

  const selectedLabel = useMemo(
    () => getPortfolioFilterLabel(portfolio),
    [portfolio]
  );

  function updatePortfolio(nextValue) {
    const params = new URLSearchParams(searchParams.toString());

    if (!nextValue || nextValue === defaultPortfolioFilter) {
      params.delete('portfolio');
    } else {
      params.set('portfolio', nextValue);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="bar topbar-wrap">
      <span className="btl">{titles[slug] || slug}</span>

      {pmRoutes.has(slug) && <span className="bbd">PM & Engineer</span>}

      <GlobalSearchWrapper />

      <select
        className="ps portfolioSelect"
        value={portfolio}
        onChange={(e) => updatePortfolio(e.target.value)}
      >
        {portfolioFilters.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>

      <span className="ac portfolio-chip">{selectedLabel}</span>

      <button className="xb">Export</button>
    </div>
  );
}