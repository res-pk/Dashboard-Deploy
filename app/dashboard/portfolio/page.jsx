export const dynamic = 'force-dynamic';
import DashboardShell from '@/components/layout/DashboardShell';
import ScreenView from '@/modules/dashboard/ScreenView';


export default function Page() {
  return (
    <DashboardShell slug="portfolio">
      <ScreenView slug="portfolio" />
    </DashboardShell>
  );
}
