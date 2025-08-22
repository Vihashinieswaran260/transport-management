import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  Button, 
  Container,
  Grid,
  Avatar,
  Divider,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  styled,
  Card,
  CardContent,
  Slide,
  Fade,
  Grow
} from '@mui/material';
import {
  Person as PersonIcon,
  DirectionsBus as BusIcon,
  Cancel as CancelIcon,
  GpsFixed as TrackIcon,
  Announcement as AnnouncementIcon,
  Feedback as FeedbackIcon,
  ContactMail as ContactIcon,
  Info as AboutIcon,
  ExitToApp as LogoutIcon,
  Phone as PhoneIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowBack
} from '@mui/icons-material';
import { 
  deepPurple, pink, amber, red, green, blue, teal, 
  grey, blueGrey, orange, indigo, cyan, brown, lime 
} from '@mui/material/colors';


// Custom styled component for fixed content area
const ContentBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: 'calc(100% - 280px)',
  position: 'fixed',
  left: '280px',
  top: 0,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    left: 0,
    paddingTop: '56px'
  }
}));

const FixedBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(135, 177, 236) 100%)',
  zIndex: -1,
  [theme.breakpoints.up('md')]: {
    left: '280px'
  }
}));

const StaffDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showEmergency, setShowEmergency] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    const emergencyContactTimeout = setTimeout(() => {
      setShowEmergency(true);
    }, 800);

    return () => clearTimeout(emergencyContactTimeout);
  }, []);

  // Sample staffdata
  const studentData = {
    name: 'Alex Johnson',
    staff_ID: 'STAFF2023001',
    dept: 'Computer Science',
    email: 'alex.johnson@university.edu',
    college: 'School of Engineering',
    mobile: '+1 (555) 123-4567',
    avatar: 'AJ'
  };

  const quickActions = [
    
    { icon: <BusIcon />, label: 'Apply Transport Staff', path: '/apply-transport-staff', color: blue[500] },
    { icon: <CancelIcon />, label: 'Cancel Bus', path: '/cancel-transport', color: red[500] },
    { icon: <TrackIcon />, label: 'Track Bus', path: '/track-bus', color: green[500] },
    { icon: <AnnouncementIcon />, label: 'Announcements', path: '/announcement', color: amber[600] },
  ];

  const renderProfileCard = () => (
    <Card sx={{ 
      mb: 3,
      width: '100%',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      backgroundColor: '#fghju98'
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ 
          color: theme.palette.primary.dark, 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <PersonIcon /> Staff Profile
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {Object.entries(studentData).filter(([key]) => key !== 'avatar').map(([key, value]) => (
            <Grid item xs={12} sm={6} key={key}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSidebarButton = (icon, label, onClick, color = pink[500]) => (
    <Button
      fullWidth
      startIcon={icon}
      onClick={onClick}
      sx={{
        my: 1,
        justifyContent: 'flex-start',
        textTransform: 'none',
        fontWeight: 'medium',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '0.95rem',
        color: theme.palette.getContrastText(color),
        backgroundColor: color,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.augmentColor({
            color: { main: color },
          }).dark,
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }
      }}
    >
      {label}
    </Button>
  );

  const renderEmergencyContact = () => (
    <Fade in={showEmergency} timeout={1000}>
      <Paper elevation={10} sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        borderRadius: '16px',
        padding: '16px',
        width: isMobile ? 'calc(100% - 60px)' : 320,
        backgroundColor: theme.palette.background.paper,
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        borderLeft: `4px solid ${red[500]}`
      }}>
        <Typography variant="h6" sx={{ 
          color: red[500], 
          mb: -0,
          mt: -1,

          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <PhoneIcon /> Emergency Contact
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Transport Office:</strong> +1 (555) 987-6543
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Your Contact:</strong> {studentData.mobile}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button 
              fullWidth 
              variant="contained" 
              color="error"
              startIcon={<PhoneIcon />}
              href="tel:+15559876543"
              sx={{ borderRadius: '12px' }}
            >
              Call Office
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth 
              variant="contained" 
              color="success"
              startIcon={<PhoneIcon />}
              href={`tel:${studentData.mobile}`}
              sx={{ borderRadius: '12px' }}
            >
              Call Your Number
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );

  return (
    <Box sx={{
      minHeight: '100vh',
      fontFamily: '"Inter", sans-serif',
      display: 'flex',
      overflow: 'hidden'
    }}>
      {/* Fixed Background */}
      <FixedBackground />

      {/* Desktop Sidebar - Fixed Position */}
      {!isMobile && (
        <Paper elevation={3} sx={{
          width: 280,
          flexShrink: 0,
          borderRadius: '0 16px 16px 0',
          padding: '24px 16px',
          background: 'linear-gradient(to bottom, rgb(5, 87, 159) 0%, rgb(38, 87, 167) 100%)',
          color: 'white',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 100,
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <Avatar
              sx={{ 
                bgcolor: cyan[300],
                width: 80, 
                height: 80, 
                mb: 2,
                fontSize: '2rem',
                border: '3px solid white'
              }}
            >
              {studentData.avatar}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {studentData.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              {studentData.dept}
            </Typography>
          </div>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />

          {renderSidebarButton(<PersonIcon />, 'My Profile', () => navigate('/student-dashboard'), deepPurple[400])}
          
          {renderSidebarButton(<BusIcon />, 'Apply Transport Staff', () => navigate('/apply-transport-staff'))}
          {renderSidebarButton(<CancelIcon />, 'Cancel Bus', () => navigate('/cancel-transport'), red[500])}
          {renderSidebarButton(<TrackIcon />, 'Track Bus', () => navigate('/track-bus'), green[600])}
          {renderSidebarButton(<AnnouncementIcon />, 'Announcements', () => navigate('/announcement'), amber[600])}
          {renderSidebarButton(<FeedbackIcon />, 'Feedback', () => navigate('/student/feedback'), teal[500])}
          {renderSidebarButton(<ContactIcon />, 'Contact Us', () => navigate('/student/contact-us'), blue[500])}
          {renderSidebarButton(<AboutIcon />, 'About Us', () => navigate('/student/about-us'), grey[300])}

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 2 }} />

          {renderSidebarButton(<LogoutIcon />, 'Logout', handleLogout, red[700])}
        </Paper>
      )}

      {/* Mobile App Bar */}
      {isMobile && (
        <Paper elevation={3} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'linear-gradient(to bottom, rgb(5, 87, 159) 0%, rgb(38, 87, 167) 100%)',
          color: 'white',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            staff Dashboard
          </Typography>
          <Avatar
            sx={{ 
              bgcolor: deepPurple[500], 
              width: 40, 
              height: 40
            }}
          >
            {studentData.avatar}
          </Avatar>
        </Paper>
      )}

      {/* Mobile Sidebar Drawer */}
      {isMobile && (
        <Slide direction="left" in={mobileOpen} mountOnEnter unmountOnExit>
          <Paper elevation={16} sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '280px',
            zIndex: 1200,
            padding: '24px 16px',
            background: 'linear-gradient(to bottom, rgb(5, 87, 159) 0%, rgb(38, 87, 167) 100%)',
            color: 'white',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            <IconButton
              sx={{ 
                color: 'white', 
                mb: 2,
                alignSelf: 'flex-end'
              }}
              onClick={handleDrawerToggle}
            >
              <CloseIcon />
            </IconButton>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <Avatar
                sx={{ 
                  bgcolor: deepPurple[500], 
                  width: 80, 
                  height: 80, 
                  mb: 2,
                  fontSize: '2rem',
                  border: '3px solid white'
                }}
              >
                {studentData.avatar}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {studentData.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {studentData.dept}
              </Typography>
            </div>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />

            {renderSidebarButton(<PersonIcon />, 'My Profile', () => {
              navigate('/student-dashboard');
              handleDrawerToggle();
            }, deepPurple[500])}
            {renderSidebarButton(<BusIcon />, 'Apply Transport', () => {
              navigate('/apply-transport');
              handleDrawerToggle();
            })}
            {renderSidebarButton(<CancelIcon />, 'Cancel Bus', () => {
              navigate('/cancel-transport');
              handleDrawerToggle();
            }, red[500])}
            {renderSidebarButton(<TrackIcon />, 'Track Bus', () => {
              navigate('/track-bus');
              handleDrawerToggle();
            }, green[600])}
            {renderSidebarButton(<AnnouncementIcon />, 'Announcements', () => {
              navigate('/announcement');
              handleDrawerToggle();
            }, amber[600])}
            {renderSidebarButton(<FeedbackIcon />, 'Feedback', () => {
              navigate('/student/feedback');
              handleDrawerToggle();
            }, teal[500])}
            {renderSidebarButton(<ContactIcon />, 'Contact Us', () => {
              navigate('/student/contact-us');
              handleDrawerToggle();
            }, blue[500])}
            {renderSidebarButton(<AboutIcon />, 'About Us', () => {
              navigate('/student/about-us');
              handleDrawerToggle();
            }, grey[800])}

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 2 }} />

            {renderSidebarButton(<LogoutIcon />, 'Logout', () => {
              handleLogout();
              handleDrawerToggle();
            }, red[700])}
          </Paper>
        </Slide>
      )}

      {/* Main Content - Fixed Position */}
      <ContentBox>
        <Container maxWidth="lg" sx={{ 
          py: 4,
          height: '100%',
          overflow: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
          <Paper elevation={3} sx={{ 
            p: { xs: 2, sm: 4 },
            borderRadius: 3,
            background: 'white',
            minHeight: 'calc(100% - 32px)',
            boxSizing: 'border-box'
          }}>
            {/* Header Section */}
            <Box textAlign="center" mb={4}>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                  fontSize: { xs: '1.8rem', sm: '2.2rem' }
                }}
              >
                staff Dashboard
              </Typography>
              <Divider sx={{ 
                width: '80px', 
                height: '3px', 
                backgroundColor: theme.palette.secondary.main, 
                margin: '0 auto 16px auto' 
              }} />
            </Box>

            {/* Profile Section - Always visible now */}
            {renderProfileCard()}

            {/* Quick Actions Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                color: theme.palette.primary.dark,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <BusIcon fontSize="large" /> Quick Actions
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {quickActions.map((action) => (
                  <Grid item xs={12} sm={6} md={3} key={action.label}>
                    <Card 
                      elevation={3} 
                      sx={{ 
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                        }
                      }}
                      onClick={() => navigate(action.path)}
                    >
                      <CardContent sx={{ 
                        textAlign: 'center',
                        padding: '24px 16px !important'
                      }}>
                        <Avatar sx={{ 
                          backgroundColor: `${action.color}20`,
                          color: action.color,
                          width: 60,
                          height: 60,
                          mb: 2,
                          margin: '0 auto'
                        }}>
                          {action.icon}
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                          {action.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Announcements Section */}
            <Box>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                color: theme.palette.primary.dark,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <AnnouncementIcon fontSize="large" /> Latest Announcements
              </Typography>

              <Grid container spacing={3}>
                {[1, 2].map((item) => (
                  <Grid item xs={12} key={item}>
                    <Paper elevation={2} sx={{ 
                      borderRadius: '12px',
                      padding: '20px',
                      backgroundColor: item % 2 === 0 ? '#F8FAFC' : 'white',
                      borderLeft: `4px solid ${item % 2 === 0 ? theme.palette.primary.light : theme.palette.secondary.light}`
                    }}>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 'bold',
                        color: theme.palette.primary.dark,
                        mb: 1
                      }}>
                        {item === 1 ? 'Route Changes Effective Next Week' : 'Holiday Schedule Update'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item === 1 
                          ? 'Posted on May 15, 2023' 
                          : 'Posted on May 10, 2023'}
                      </Typography>
                      <Typography variant="body1">
                        {item === 1 
                          ? 'Due to construction on Main Street, buses 12A and 12B will follow a temporary route starting Monday. Please check the updated schedule.' 
                          : 'Transport services will operate on a reduced schedule during the upcoming holiday weekend. Plan your trips accordingly.'}
                      </Typography>
                      <Button 
                        size="small" 
                        sx={{ 
                          mt: 2,
                          color: theme.palette.primary.main,
                          fontWeight: 'bold'
                        }}
                        onClick={() => navigate('/announcement')}
                      >
                        View All Announcements
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Container>
      </ContentBox>

      {/* Emergency Contact */}
      {renderEmergencyContact()}
    </Box>
  );
};

export default StaffDashboard;