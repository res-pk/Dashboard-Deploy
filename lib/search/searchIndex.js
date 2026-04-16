import { titles } from '@/modules/dashboard/config';

export const searchIndex = [
  { id: 'project-al-barsha', type: 'Project', name: 'Al Barsha ITS Corridor Upgrade', route: '/dashboard/workspace', screen: 'workspace', meta: 'Critical project · A. Karim · EMAAR', portfolio: 'its_projects', keywords: ['al barsha', 'its', 'corridor', 'upgrade', 'a karim', 'emaar'] },
  { id: 'project-dafza', type: 'Project', name: 'DAFZA Traffic Signal Modernization', route: '/dashboard/health', screen: 'health', meta: 'Delayed project · N. Rashid', portfolio: 'traffic_projects', keywords: ['dafza', 'traffic', 'signal', 'modernization', 'n rashid'] },
  { id: 'project-jlt', type: 'Project', name: 'JLT ITS Field Devices Rollout', route: '/dashboard/packages', screen: 'packages', meta: 'At risk project · S. Mehta', portfolio: 'its_projects', keywords: ['jlt', 'its', 'field devices', 'rollout', 's mehta'] },
  { id: 'project-dip', type: 'Project', name: 'DIP Traffic Monitoring Program', route: '/dashboard/portfolio', screen: 'portfolio', meta: 'On-track project · F. Al Hamad', portfolio: 'traffic_projects', keywords: ['dip', 'traffic', 'monitoring', 'program', 'f al hamad'] },
  { id: 'project-mirdif', type: 'Project', name: 'Mirdif ITS Preventive Maintenance', route: '/dashboard/risks', screen: 'risks', meta: 'At risk maintenance scope · H. Baig', portfolio: 'its_maintenance', keywords: ['mirdif', 'its', 'preventive maintenance', 'h baig'] },
  { id: 'project-business-bay', type: 'Project', name: 'Business Bay Traffic Maintenance Zone', route: '/dashboard/commercial', screen: 'commercial', meta: 'On-track maintenance scope · Y. Al Zaabi', portfolio: 'traffic_maintenance', keywords: ['business bay', 'traffic', 'maintenance', 'y al zaabi'] },
  { id: 'task-ifc', type: 'Task', name: 'IFC Drawing Rev.3 follow-up', route: '/dashboard/appfollow', screen: 'appfollow', meta: 'Approval follow-up · Client response overdue', portfolio: 'its_projects', keywords: ['ifc drawing', 'rev 3', 'follow up', 'approval', 'client'] },
  { id: 'task-hvac-zone-b', type: 'Task', name: 'ITS cabinet site inspection', route: '/dashboard/inspfollow', screen: 'inspfollow', meta: 'Inspection follow-up · Today 14:00', portfolio: 'its_projects', keywords: ['its cabinet', 'inspection', 'd morgan'] },
  { id: 'task-electrical-fix', type: 'Task', name: 'Traffic controller 1st fix', route: '/dashboard/taskboard', screen: 'taskboard', meta: 'Task board · Traffic package', portfolio: 'traffic_projects', keywords: ['traffic controller', '1st fix', 'first fix', 'task'] },
  { id: 'task-plumbing-roughin', type: 'Task', name: 'Signal pole trench reinstatement', route: '/dashboard/taskboard', screen: 'taskboard', meta: 'Task board · Progress update ready', portfolio: 'traffic_projects', keywords: ['signal pole', 'trench', 'reinstatement'] },
  { id: 'task-rebar-delivery', type: 'Task', name: 'Spare ITS controller delivery follow-up', route: '/dashboard/material', screen: 'material', meta: 'Material readiness · Shortage under review', portfolio: 'its_maintenance', keywords: ['spare its controller', 'delivery', 'shortage', 'material'] },
  { id: 'task-ncr-al014', type: 'Task', name: 'Traffic junction NCR #AL-014 response', route: '/dashboard/risks', screen: 'risks', meta: 'Risk / issue / blocker register', portfolio: 'traffic_maintenance', keywords: ['traffic junction', 'ncr', 'al-014', 'response'] },
  { id: 'milestone-foundation', type: 'Milestone', name: 'Foundation complete', route: '/dashboard/milestones', screen: 'milestones', meta: 'Milestone tracker · 13 days late', portfolio: 'its_projects', keywords: ['foundation', 'complete', '13d late'] },
  { id: 'milestone-structural', type: 'Milestone', name: 'Structural frame L1-5', route: '/dashboard/milestones', screen: 'milestones', meta: 'Milestone tracker · Delayed', portfolio: 'traffic_projects', keywords: ['structural frame', 'l1-5', 'delayed'] },
  { id: 'milestone-hvac-duct', type: 'Milestone', name: 'Controller cabinet installation', route: '/dashboard/milestones', screen: 'milestones', meta: 'Milestone tracker · At risk', portfolio: 'its_maintenance', keywords: ['controller cabinet', 'install', 'at risk'] },
  { id: 'milestone-practical', type: 'Milestone', name: 'Annual maintenance completion', route: '/dashboard/milestones', screen: 'milestones', meta: 'Milestone tracker · Upcoming', portfolio: 'traffic_maintenance', keywords: ['annual maintenance', 'completion'] },
  { id: 'client-emaar', type: 'Client', name: 'EMAAR', route: '/dashboard/approvals', screen: 'approvals', meta: 'Client approvals and project follow-up', portfolio: 'its_projects', keywords: ['emaar', 'client'] },
  { id: 'client-dpworld', type: 'Client', name: 'DP World', route: '/dashboard/billing', screen: 'billing', meta: 'Billing-ready project client', portfolio: 'traffic_projects', keywords: ['dp world', 'client'] },
  { id: 'client-wsp', type: 'Client', name: 'WSP Consultant', route: '/dashboard/approvals', screen: 'approvals', meta: 'Consultant approvals', portfolio: 'its_projects', keywords: ['wsp', 'consultant'] },
  { id: 'package-civil', type: 'Package', name: 'ITS civil works', route: '/dashboard/packages', screen: 'packages', meta: 'Work package tracker · Blocked', portfolio: 'its_projects', keywords: ['its civil works', 'civil', 'blocked'] },
  { id: 'package-hvac', type: 'Package', name: 'Traffic signal installation', route: '/dashboard/packages', screen: 'packages', meta: 'Work package tracker · At risk', portfolio: 'traffic_projects', keywords: ['traffic signal installation', 'signal package'] },
  { id: 'package-electrical', type: 'Package', name: 'Electrical maintenance works', route: '/dashboard/packages', screen: 'packages', meta: 'Work package tracker · At risk', portfolio: 'traffic_maintenance', keywords: ['electrical maintenance', 'electrical'] },
  { id: 'package-plumbing', type: 'Package', name: 'ITS preventive maintenance package', route: '/dashboard/packages', screen: 'packages', meta: 'Work package tracker · On track', portfolio: 'its_maintenance', keywords: ['its maintenance package', 'maintenance'] },
  { id: 'package-fire', type: 'Package', name: 'Field response package', route: '/dashboard/packages', screen: 'packages', meta: 'Work package tracker · Blocked', portfolio: 'traffic_maintenance', keywords: ['field response package'] },
  { id: 'doc-permit', type: 'Document', name: 'Permit drawings set A', route: '/dashboard/docstatus', screen: 'docstatus', meta: 'Documentation status · Overdue', portfolio: 'its_projects', keywords: ['permit drawings', 'set a', 'document'] },
  { id: 'doc-soil', type: 'Document', name: 'Soil investigation report', route: '/dashboard/docstatus', screen: 'docstatus', meta: 'Documentation status · Overdue', portfolio: 'traffic_projects', keywords: ['soil investigation', 'report'] },
  { id: 'doc-om-manual', type: 'Document', name: 'O&M Manual Draft', route: '/dashboard/docready', screen: 'docready', meta: 'Document readiness · Awaiting approval', portfolio: 'its_maintenance', keywords: ['o&m', 'manual draft', 'om manual'] },
];

export function searchDashboardIndex(query, portfolio = 'all') {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return searchIndex
    .filter((item) => portfolio === 'all' || item.portfolio === portfolio)
    .map((item) => {
      const haystack = [item.name, item.meta, titles[item.screen] || '', item.portfolio || '', ...(item.keywords || [])].join(' ').toLowerCase();
      let score = 0;
      if (item.name.toLowerCase().startsWith(normalized)) score += 100;
      if (item.name.toLowerCase().includes(normalized)) score += 60;
      if ((item.keywords || []).some((keyword) => keyword.toLowerCase().includes(normalized))) score += 35;
      if (haystack.includes(normalized)) score += 20;
      if (item.type === 'Project') score += 5;
      return { ...item, score, label: titles[item.screen] || item.screen };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 8);
}
