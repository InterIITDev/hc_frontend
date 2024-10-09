
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Button } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import BlankCard from '../shared/BlankCard';

const BookAppointmentCard = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = '#ecf2ff';
  const successLight = theme.palette.success.light;

  return (
    <BlankCard>
      <div style={{ padding: '20px', textAlign: 'center',}}>
        <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '10px' }}>
          <Image 
            src='/images/dcp.jpg'
            layout="fill"
            objectFit="contain"
            alt=""
          />
         </div>
          <Button variant="contained" disableElevation color="primary" style={{ marginTop: '16px' }} >
            Book an Appointment
          </Button>
          </div>
    </BlankCard>
  );
};

export default BookAppointmentCard;
