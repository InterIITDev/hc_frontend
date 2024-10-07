'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { appointmentData } from '@/app/(DashboardLayout)/components/dashboard/appointmentData.json'; 
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/Profilecard';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/BookApptcard';
import AppointmentHistory from '@/app/(DashboardLayout)/components/dashboard/appointmentHistory';
import { useState } from 'react';
import PrescriptionCard from './prescriptioncard';

const Dashboard = () => {
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const handleViewPrescription = (prescriptionLink: string) => {
    const selected = appointmentData.find(
      (appointment) => appointment.prescriptionLink === prescriptionLink
    );
    setSelectedPrescription(selected);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}> 
                    <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
            a
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} >
            <AppointmentHistory data={appointmentData}/>
          </Grid>
          <Grid item xs={12} lg={6}>
            <PrescriptionCard prescription={selectedPrescription} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
