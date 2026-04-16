export const menu = [
  {
    "section": "Executive",
    "slug": "portfolio",
    "label": "Portfolio overview"
  },
  {
    "section": "Executive",
    "slug": "health",
    "label": "Project health"
  },
  {
    "section": "Executive",
    "slug": "billing",
    "label": "Revenue & billing"
  },
  {
    "section": "Executive",
    "slug": "approvals",
    "label": "Approval bottlenecks"
  },
  {
    "section": "Executive",
    "slug": "docstatus",
    "label": "Documentation status"
  },
  {
    "section": "Executive",
    "slug": "drilldown",
    "label": "Project drill-down"
  },
  {
    "section": "PM & Engineer",
    "slug": "workspace",
    "label": "Project workspace"
  },
  {
    "section": "PM & Engineer",
    "slug": "milestones",
    "label": "Milestone tracker"
  },
  {
    "section": "PM & Engineer",
    "slug": "packages",
    "label": "Work package tracker"
  },
  {
    "section": "PM & Engineer",
    "slug": "siteprog",
    "label": "Site progress view"
  },
  {
    "section": "PM & Engineer",
    "slug": "taskboard",
    "label": "Task & assignment board"
  },
  {
    "section": "PM & Engineer",
    "slug": "risks",
    "label": "Risk / issue / blocker register"
  },
  {
    "section": "PM & Engineer",
    "slug": "docready",
    "label": "Document readiness"
  },
  {
    "section": "PM & Engineer",
    "slug": "appfollow",
    "label": "Approval follow-up"
  },
  {
    "section": "PM & Engineer",
    "slug": "inspfollow",
    "label": "Inspection follow-up"
  },
  {
    "section": "PM & Engineer",
    "slug": "material",
    "label": "Material & resource readiness"
  },
  {
    "section": "PM & Engineer",
    "slug": "commercial",
    "label": "Commercial progress"
  }
];

export const titles = {
  "portfolio": "Portfolio overview",
  "health": "Project health",
  "billing": "Revenue & billing",
  "approvals": "Approval bottlenecks",
  "docstatus": "Documentation status",
  "drilldown": "Project drill-down",
  "workspace": "Project workspace",
  "milestones": "Milestone tracker",
  "packages": "Work package tracker",
  "siteprog": "Site progress view",
  "taskboard": "Task & assignment board",
  "risks": "Risk / issue / blocker register",
  "docready": "Document readiness",
  "appfollow": "Approval follow-up",
  "inspfollow": "Inspection follow-up",
  "material": "Material & resource readiness",
  "commercial": "Commercial progress"
};

export const pmRoutes = new Set(["appfollow", "commercial", "docready", "inspfollow", "material", "milestones", "packages", "risks", "siteprog", "taskboard", "workspace"]);

export const portfolioFilters = [
  { key: 'all', label: 'All portfolios' },
  { key: 'its_projects', label: 'ITS Projects' },
  { key: 'traffic_projects', label: 'Traffic Projects' },
  { key: 'its_maintenance', label: 'ITS Maintenance' },
  { key: 'traffic_maintenance', label: 'Traffic Maintenance' },
];

export const defaultPortfolioFilter = 'all';

export function getPortfolioFilterLabel(key) {
  return portfolioFilters.find((item) => item.key === key)?.label || portfolioFilters[0].label;
}
