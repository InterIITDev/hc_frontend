import { useState } from 'react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const AppointmentList = (props: { data: any; onAppointmentSelect: any }) => {
  const { data, onAppointmentSelect } = props;

  return (
    <DashboardCard title="Appointments List">
      <List>
        {data.map((appointment: any, index: number) => (
          <ListItem
            key={index}
            button
            onClick={() => onAppointmentSelect(appointment)}
          >
            <ListItemText
              primary={appointment.doctorName}
              secondary={`${appointment.time} | Status: ${appointment.status}`}
            />
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onAppointmentSelect(appointment);
              }}
              underline="none"
            >
              View Timeline
            </Link>
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
};

export default AppointmentList;
