'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { menu } from '@/modules/dashboard/config';
import { defaultPortfolioFilter } from '@/modules/dashboard/config';

const dotColors = {
  portfolio:'var(--bl)', health:'var(--gn)', billing:'var(--am)', approvals:'var(--rd)',
  docstatus:'var(--pu)', drilldown:'#888780', workspace:'var(--bl)', milestones:'var(--tl)',
  packages:'var(--am)', siteprog:'var(--gn)', taskboard:'var(--pu)', risks:'var(--rd)',
  docready:'var(--bl)', appfollow:'var(--am)', inspfollow:'var(--tl)', material:'var(--gn)', commercial:'var(--pu)'
};

export default function Sidebar() {
  const pathname = usePathname();
  const portfolio =
  typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('portfolio') || defaultPortfolioFilter
    : defaultPortfolioFilter;
  let currentSection = null;

  function hrefFor(slug) {
    const params = new URLSearchParams();
    if (portfolio) params.set('portfolio', portfolio);
    const query = params.toString();
    return query ? `/dashboard/${slug}?${query}` : `/dashboard/${slug}`;
  }

  return (
    <nav className="side">
      <div className="logo">Scientechnic <span>ERP</span></div>
      {menu.map((item) => {
        const sectionHeader = item.section !== currentSection ? (
          <div className="ns" key={`section-${item.section}`}>{item.section}</div>
        ) : null;
        currentSection = item.section;
        const active = pathname === `/dashboard/${item.slug}`;
        return (
          <div key={item.slug}>
            {sectionHeader}
            <Link className={`ni ${active ? 'active' : ''}`} href={hrefFor(item.slug)}>
              <div className="dot" style={{ background: dotColors[item.slug] || 'var(--bl)' }} />
              {item.label}
            </Link>
          </div>
        );
      })}
      <div style={{ height: 10 }} />
    </nav>
  );
}
