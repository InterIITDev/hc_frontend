
// import { useState } from 'react';
// import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
// import {
//   Timeline,
//   TimelineItem,
//   TimelineOppositeContent,
//   TimelineSeparator,
//   TimelineDot,
//   TimelineConnector,
//   TimelineContent,
//   timelineOppositeContentClasses,
// } from '@mui/lab';
// import { Link, Typography } from '@mui/material';
// import PrescriptionCard from '../../AppointmentList';

// const AppointmentHistory = (props: { data: any }) => {
//   const { data }: { data: any } = props;
//   const [selectedPrescription, setSelectedPrescription] = useState<any>(null);

//   return (
//     <>
//       <DashboardCard title="Recent Appointments">
//         <div
//           style={{
//             minHeight: '400px',
//             overflowY: 'auto',
//           }}
//         >
//           <Timeline
//             className="theme-timeline"
//             sx={{
//               p: 0,
//               mb: '-40px',
//               '& .MuiTimelineConnector-root': {
//                 width: '1px',
//                 backgroundColor: '#efefef'
//               },
//               [`& .${timelineOppositeContentClasses.root}`]: {
//                 flex: 0.5,
//                 paddingLeft: 0,
//               },
//             }}
//           >
//             {data.map((appointment: any, index: number) => (
//               <TimelineItem key={index}>
//                 <TimelineOppositeContent>{appointment.time}</TimelineOppositeContent>
//                 <TimelineSeparator>
//                   <TimelineDot color={appointment.color} variant="outlined" />
//                   {index < data.length - 1 && <TimelineConnector />}
//                 </TimelineSeparator>
//                 <TimelineContent>
//                   <Typography fontWeight="600">{appointment.status}</Typography>
//                   <Typography>{appointment.doctorName}</Typography>
//                   <Link
//                     href="#"
//                     onClick={() => setSelectedPrescription(appointment)}
//                     underline="none"
//                   >
//                     View Prescription
//                   </Link>
//                 </TimelineContent>
//               </TimelineItem>
//             ))}
//           </Timeline>
//         </div>
//       </DashboardCard>
//       {/* Render the PrescriptionCard and pass the selectedPrescription */}
//       {selectedPrescription && <PrescriptionCard prescription={selectedPrescription} />}
//     </>
//   );
// };

// export default AppointmentHistory;
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, timelineOppositeContentClasses } from '@mui/lab';
import { Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const AppointmentTimeline = (props: { appointment: any }) => {
  const { appointment } = props;

  return (
    <DashboardCard title="Appointment Timeline">
      <div
        style={{
          minHeight: '400px',
          overflowY: 'auto',
        }}
      >
        {appointment ? (
          <Timeline
            className="theme-timeline"
            sx={{
              p: 0,
              mb: '-40px',
              '& .MuiTimelineConnector-root': {
                width: '1px',
                backgroundColor: '#efefef',
              },
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.5,
                paddingLeft: 0,
              },
            }}
          >
            {appointment.timeline.map((event: any, index: number) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>{event.time}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={appointment.color} variant="outlined" />
                  {index < appointment.timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography fontWeight="600">{event.status}</Typography>
                  {event.note && <Typography>{event.note}</Typography>}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          <Typography>No appointment selected.</Typography>
        )}
      </div>
    </DashboardCard>
  );
};

export default AppointmentTimeline;
