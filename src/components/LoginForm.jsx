import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Divider, 
  InputAdornment, 
  IconButton, 
  Paper,
  Avatar,
  Grid
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff,
  AccountCircle,
  Lock,
  School
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  maxWidth: 450,
  margin: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    boxShadow: 'none'
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
}));

const backgroundImage = process.env.PUBLIC_URL + '/college-bg.png';

const BackgroundContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: theme.spacing(2),
}));

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin001@shanmugha.edu.in' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (username === 'e21cs054@shanmugha.edu.in' && password === 'E21CS054') {
      localStorage.setItem('userName', 'Student');
      navigate('/student-dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google Login Success:", decoded);

      const userData = {
        name: decoded.name,
        email: decoded.email,
        photo: decoded.picture,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('userName', decoded.name);

      if (decoded.email === 'admin@gmail.com') {
        navigate('/admin-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    } catch (err) {
      console.error("Google Login Error:", err);
      alert("Google Login Failed");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BackgroundContainer component="main" maxWidth={false}>
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledAvatar>
            <School sx={{ fontSize: 40 }} />
          </StyledAvatar>
          
          <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 'bold', textAlign: 'center' }}>
            Sri Shanmugha Educational Institution
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Sign in to your account
          </Typography>
          
          <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="action" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                mt: 2, 
                mb: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Sign In
            </Button>
            
            <Divider sx={{ my: 3 }}>OR</Divider>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log('Login Failed');
                }}
                shape="pill"
                size="large"
                text="signin_with"
              />
            </Box>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Forgot password? Contact Admin
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </StyledPaper>
    </BackgroundContainer>
  );
};

export default LoginForm;