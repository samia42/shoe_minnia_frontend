import { Button, Card, CardActions, CardContent, CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import InfoCard from './InfoCard';
import SideBar from './SideBar';

const AdminDashboard = () => {
    return (
        <>
         <Box
            sx={{
                display:'flex',}}
            >
                <CssBaseline />
                <SideBar/>
               <InfoCard name={"Total Ammount"}/>
               <InfoCard name={"All Products"}/>
               <InfoCard name={"All Orders"}/>
               <InfoCard name={"All Users"}/>

            </Box>
        
        </>
    );
};

export default AdminDashboard;