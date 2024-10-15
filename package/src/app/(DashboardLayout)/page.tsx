'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { appointmentData } from '@/app/(DashboardLayout)/components/dashboard/appointmentData.json'; 
// components
import Profile from '@/app/(DashboardLayout)/components/dashboard/Profilecard';
import BookApptCard from '@/app/(DashboardLayout)/components/dashboard/BookApptcard';
import AppointmentHistory from '@/app/(DashboardLayout)/components/dashboard/appointmentHistory';
import { useState } from 'react';
import AppointmentList from './AppointmentList';

const Dashboard = () => {
const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

// Handles selecting an appointment from the list
const handleAppointmentSelect = (appointment: any) => {
  setSelectedAppointment(appointment);
};

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Profile />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BookApptCard />
              </Grid>
            
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} >
            <AppointmentList data={appointmentData} onAppointmentSelect={handleAppointmentSelect}/>
          </Grid>
          <Grid item xs={12} lg={6}>
            <AppointmentHistory appointment={selectedAppointment}/>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
