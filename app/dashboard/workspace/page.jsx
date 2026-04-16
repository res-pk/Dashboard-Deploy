import DashboardShell from '@/components/layout/DashboardShell';
import ScreenView from '@/modules/dashboard/ScreenView';

export default function Page() {
  return (
    <DashboardShell slug="workspace">
      <ScreenView slug="workspace" />
    </DashboardShell>
  );
}
