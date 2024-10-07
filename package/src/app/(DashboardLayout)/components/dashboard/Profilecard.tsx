'use client';
import { Grid,Table, TableBody, TableCell, TableContainer, TableRow, Paper, Avatar, Typography } from "@mui/material";
import PageContainer from "../container/PageContainer";
import DashboardCard from "../shared/DashboardCard";
import data from "./profiledata.json"

const Profile = () => {

const profileData = data.profileData[0];
  return (
    <PageContainer title="Profile" description="this is Profile">

      <DashboardCard title="Profile">
        
         <Grid container spacing={2} alignItems="center" justifyContent="center">
          
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt={profileData.name}
              src= {profileData.image}
              sx={{ width: 150, height: 150, margin: 'auto' }}
            />
          </Grid>

         <DashboardCard >
          <Grid item xs={12} md={8}>
            
              <Table aria-label="profile details">
                <TableBody>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell>{profileData.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Roll No</strong></TableCell>
                    <TableCell>{profileData.rollNo}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Blood Group</strong></TableCell>
                    <TableCell>{profileData.bloodGroup}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Designation</strong></TableCell>
                    <TableCell>{profileData.designation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Department</strong></TableCell>
                    <TableCell>{profileData.department}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell>{profileData.email}</TableCell>
                  </TableRow>
                        <TableRow>
                    <TableCell><strong>Hall of Residence</strong></TableCell>
                    <TableCell>{profileData.resi}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
           
          </Grid>
          </DashboardCard>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Profile;