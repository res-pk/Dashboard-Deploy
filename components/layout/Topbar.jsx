'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { defaultPortfolioFilter, getPortfolioFilterLabel, pmRoutes, portfolioFilters, titles } from '@/modules/dashboard/config';
import GlobalSearch from '@/components/search/GlobalSearch';

export default function Topbar({ slug }) {
  const router = useRouter();
  const pathname = usePathname();
  const portfolio =
  typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('portfolio') || defaultPortfolioFilter
    : defaultPortfolioFilter;
  const selectedLabel = useMemo(() => getPortfolioFilterLabel(selectedPortfolio), [selectedPortfolio]);

  function updatePortfolio(nextValue) {
    const params = new URLSearchParams(searchParams.toString());
    if (!nextValue || nextValue === defaultPortfolioFilter) params.delete('portfolio');
    else params.set('portfolio', nextValue);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="bar topbar-wrap">
      <span className="btl">{titles[slug] || slug}</span>
      {pmRoutes.has(slug) ? <span className="bbd">PM &amp; Engineer</span> : null}
      <GlobalSearch />
      <select className="ps portfolioSelect" value={selectedPortfolio} onChange={(e) => updatePortfolio(e.target.value)} aria-label="Portfolio filter">
        {portfolioFilters.map((item) => (
          <option key={item.key} value={item.key}>{item.label}</option>
        ))}
      </select>
      <span className="ac portfolio-chip" title="Configurable portfolio scope">
        <span className="av" style={{ width: 18, height: 18, fontSize: 9 }}>F</span>
        {selectedLabel}
      </span>
      <button className="xb">Export</button>
    </div>
  );
}
