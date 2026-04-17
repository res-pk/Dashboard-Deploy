export const dynamic = 'force-dynamic';
import DashboardShell from '@/components/layout/DashboardShell';
import ScreenView from '@/modules/dashboard/ScreenView';


export default function Page() {
  return (
    <DashboardShell slug="material">
      <ScreenView slug="material" />
    </DashboardShell>
  );
}
