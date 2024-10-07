'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Icons = () => {
  return (
    <PageContainer title="Prescription" description="this is Prescription">

      <DashboardCard title="Prescription">
      <iframe src="https://excalidraw.com/"  title="Inline Frame Example" 
    width="100%"
    height="650"></iframe>
      </DashboardCard>
    </PageContainer>
  );
};

export default Icons;
