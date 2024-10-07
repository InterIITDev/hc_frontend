// PrescriptionCard.tsx
import { Box, Typography, Link } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useEffect, useState } from 'react';

const PrescriptionCard = ({ prescription }: { prescription: any }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the prescription image using the prescription link
    if (prescription?.prescriptionLink) {
      fetch(prescription.prescriptionLink)
        .then(response => {
          if (response.ok) {
            return response.blob(); 
          }
          throw new Error('Network response was not ok.');
        })
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          setImage(imageUrl);
        })
        .catch(error => {
          console.error('Error fetching prescription image:', error);
          setImage(null); 
        });
    }
  }, [prescription]);

  if (!prescription) {
    return (
      <DashboardCard title="Prescription Details">
        <Typography variant="body1">
          Click on a prescription to view details.
        </Typography>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard title="Prescription Details">
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Displaying the prescription image */}
        {image ? (
          <img
            src={image}
            alt="Prescription"
            style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '16px' }}
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            No image available.
          </Typography>
        )}
        <Typography variant="h6" fontWeight="600">
          Doctor: {prescription.doctorName}
        </Typography>
        <Typography variant="subtitle1">Time: {prescription.time}</Typography>
        <Typography variant="body1">Status: {prescription.status}</Typography>
        <Link
          href={prescription.prescriptionLink}
          underline="none"
          target="_blank"
        >
          View Full Prescription
        </Link>
      </Box>
    </DashboardCard>
  );
};

export default PrescriptionCard;
