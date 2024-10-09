'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { appointmentData } from '@/app/(DashboardLayout)/components/dashboard/appointmentData.json'; 

import Profile from '@/app/(DashboardLayout)/components/dashboard/ProfileCard';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/BookApptcard';
import AppointmentHistory from '@/app/(DashboardLayout)/components/dashboard/appointmentHistory';
import { useState } from 'react';
import PrescriptionCard from './prescriptioncard';
import BookAppointmentCard from '@/app/(DashboardLayout)/components/dashboard/BookApptcard';

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
                <BookAppointmentCard />
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} lg={8}>
            
            <Profile />
          
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
