export const dynamic = 'force-dynamic';
import DashboardShell from '@/components/layout/DashboardShell';
import ScreenView from '@/modules/dashboard/ScreenView';


export default function Page() {
  return (
    <DashboardShell slug="risks">
      <ScreenView slug="risks" />
    </DashboardShell>
  );
}
