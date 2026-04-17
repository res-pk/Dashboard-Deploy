'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { getPortfolioFromURL } from '@/lib/getPortfolioFromURL';
import { defaultPortfolioFilter, getPortfolioFilterLabel } from '@/modules/dashboard/config';
import { searchDashboardIndex } from '@/lib/search/searchIndex';


export default function GlobalSearch() {
  const portfolio = getPortfolioFromURL();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);  

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (event.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = useMemo(() => searchDashboardIndex(query, portfolio), [query, portfolio]);
  const scopeLabel = getPortfolioFilterLabel(portfolio);

  return (
    <div className="globalSearch">
      <div className="globalSearchInputWrap">
        <input
          ref={inputRef}
          className="globalSearchInput"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={`Search ${scopeLabel.toLowerCase()}…`}
          aria-label="Search projects, tasks, milestones, clients, packages, and documents"
        />
        <span className="globalSearchHint">Ctrl + K</span>
      </div>

      {open && query.trim() ? (
        <div className="globalSearchResults">
          {results.length ? results.map((item) => {
            const href = portfolio === 'all' ? item.route : `${item.route}?portfolio=${portfolio}`;
            return (
              <Link key={item.id} href={href} className="globalSearchResult" onClick={() => setOpen(false)}>
                <div>
                  <div className="globalSearchResultTitle">{item.name}</div>
                  <div className="globalSearchResultMeta">{item.type} · {item.meta}</div>
                </div>
                <span className="globalSearchResultTag">{item.label}</span>
              </Link>
            );
          }) : <div className="globalSearchEmpty">No results found in {scopeLabel}.</div>}
        </div>
      ) : null}
    </div>
  );
}
