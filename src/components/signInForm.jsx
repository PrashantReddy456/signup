import React, { useState } from 'react';
import {
  Box,            
  Typography,     
  TextField,      
  Button,         
  FormControlLabel, 
  Checkbox,       
  IconButton,    
  InputAdornment, 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Sign In button clicked!');
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: 2,
        backgroundColor: '#f5f5f5', 
      }}
    >
      <Box
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 400, 
          padding: 4,
          borderRadius: 2,
          boxShadow: 3, 
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 2, 
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Sign in
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Please login to continue to your account.
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal" 
          defaultValue="prashant@gmail.com" 
          type="email"
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          InputProps={{ 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked />} 
          label="Keep me logged in"
          sx={{ mt: 1, mb: 2 }} 
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            py: 1.5, 
            bgcolor: 'primary.main', 
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            textTransform: 'none', 
            fontSize: '1rem',
          }}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}

export default SignInForm;