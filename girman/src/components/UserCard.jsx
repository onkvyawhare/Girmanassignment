import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import Image from 'next/image';

const UserCard = ({ firstname, location, lastname, phone, onFetchDetails }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card style={{ width: '300px', margin: '10px' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px',
            }}
          >
            <Image
              src="/image.png" // Path to the static image in the public folder
              alt="User Avatar"
              width={80} // Adjust width as needed
              height={80} // Adjust height as needed
              layout="intrinsic"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography variant="h6">{firstname} {lastname}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              <LocationOn style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {location}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              <Typography variant="body2" color="textSecondary" style={{ marginRight: '10px' }}>
                <Phone style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {phone}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'grey' }, padding: '6px 12px' }}
              >
                Fetch Details
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* MUI Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '400px',  // Increase the width as needed
            height: '350px', // Increase the height as needed
          },
        }}
      >
        <DialogTitle sx={{ 
            padding: '20px', 
            textAlign: 'center', // Center the dialog title
            borderBottom: '1px solid #ddd' // Optional: add border below title for separation
          }}>Fetch Details</DialogTitle>
        <DialogContent>
          <Box sx={{ padding: '20px' }}>
            <Typography  variant="body2" // Reduce size by using a smaller variant
              style={{ marginBottom: '20px', color: '#4B4F54' }} >
              Here are the details of the following employee
            </Typography>

            <Typography variant="h6" gutterBottom>
              Name: {firstname} {lastname}
            </Typography>

            <Typography variant="body1" style={{ marginTop: '10px' }}>
              <LocationOn style={{ fontSize: '16px', verticalAlign: 'middle' }} /> Location: {location}
            </Typography>

            <Typography variant="body1" style={{ marginTop: '10px' }}>
              <Phone style={{ fontSize: '16px', verticalAlign: 'middle' }} /> Contact number: {phone}
            </Typography>

            <Box
              sx={{
                width: '100%',
                height: '200px', // Set height for the rectangle containing the image
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd', // Optional: add border for the rectangle
                marginBottom: '20px',
              }}
            >
              <Image
                src="/image.png" // Use the user's image URL if available
                alt="User Avatar"
                width={150} // Adjust width as needed
                height={150} // Adjust height as needed
                layout="intrinsic"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserCard;
