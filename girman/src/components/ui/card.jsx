import React from 'react';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';

const userCard = ({ name, location, phone, image }) => {
  return (
    <Card style={{ width: '300px', margin: '10px' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Avatar src={image} alt={name} style={{ margin: 'auto', width: 80, height: 80 }} />
        <Typography variant="h6" style={{ marginTop: '10px' }}>{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          <LocationOn style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {location}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ margin: '10px 0' }}>
          <Phone style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {phone}
        </Typography>
        <Button variant="contained" color="primary">
          Fetch Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default userCard;
