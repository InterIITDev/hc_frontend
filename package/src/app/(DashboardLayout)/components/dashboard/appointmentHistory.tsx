
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
