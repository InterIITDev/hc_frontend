import { Box, Button, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useTheme } from '@mui/material/styles';

const BookAppointmentCard = () => {
  const theme = useTheme();

  return (
    <DashboardCard
      title="Book an Appointment"
      subtitle="Get connected with the best doctors"
      action={
        <Button variant="contained" color="secondary">
          Book Now
        </Button>
      }
    >
    </DashboardCard>
  )
}

export default BookAppointmentCard;
