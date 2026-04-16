import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DashboardShell({ slug, children }) {
  return (
    <div className="shell">
      <Sidebar />
      <div className="main">
        <Topbar slug={slug} />
        <div className="cnt">{children}</div>
      </div>
    </div>
  );
}
