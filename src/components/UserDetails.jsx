import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

export function UserDetails({data,onChange,onSubmit}) {
     
    
    return (
        <form
      autoComplete="off"
      noValidate
      {...data}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Full Name"
                label="First name"
                name="fullName"
                onChange={onChange}
                required
                value={data.fullName}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={onChange}
                required
                value={data.email}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={onChange}
                type="number"
                value={data.phone}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField              
                fullWidth
                label="Birthday"
                name="birthDate"
                onChange={onChange}
                type="datetime-local"
                value={data.birthDate}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={onSubmit}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
    )
}
