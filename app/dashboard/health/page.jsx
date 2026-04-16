import DashboardShell from '@/components/layout/DashboardShell';
import ScreenView from '@/modules/dashboard/ScreenView';

export default function Page() {
  return (
    <DashboardShell slug="health">
      <ScreenView slug="health" />
    </DashboardShell>
  );
}
