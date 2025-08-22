import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

// Fix Leaflet marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const TrackBus = () => {
  const navigate = useNavigate();
  const [selectedBus, setSelectedBus] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [busStatus, setBusStatus] = useState(null);

  const busList = []; // Empty list — replace with real-time data from backend

  const collegePosition = [11.477143, 77.615229];

  const handleBusChange = (bus) => {
    setSelectedBus(bus);
    setShowMap(false);
    setBusStatus(''); // Reset or fetch real-time status from backend
  };

  const handleTrack = () => {
    setShowMap(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getBusDetails = (bus) => {
    return {
      route: '',
      driver: '',
      estimatedArrival: '',
    };
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <Button onClick={handleBack} variant="outlined" sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Select a Bus
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This section will show the current status of the selected bus:
      </Typography>

      {selectedBus && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Current Status of {selectedBus}: {busStatus || 'N/A'}
          </Typography>
        </Box>
      )}

      <Box>
        {busList.length === 0 ? (
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            No buses available. Please connect to backend to load data.
          </Typography>
        ) : (
          busList.map((bus, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedBus === bus}
                  onChange={() => handleBusChange(bus)}
                  sx={{
                    backgroundColor: '#add8e6',
                    borderRadius: '4px',
                    padding: '4px',
                    marginRight: '8px',
                  }}
                />
              }
              label={bus}
            />
          ))
        )}
      </Box>

      {selectedBus && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Bus Details
          </Typography>
          <Typography variant="body1">
            <strong>Route:</strong> {getBusDetails(selectedBus).route || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Driver:</strong> {getBusDetails(selectedBus).driver || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Estimated Arrival:</strong> {getBusDetails(selectedBus).estimatedArrival || 'N/A'}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleTrack}
        disabled={!selectedBus}
        sx={{ mt: 2 }}
      >
        Track
      </Button>

      {showMap && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Tracking: {selectedBus || 'N/A'} — Showing College Location
          </Typography>
          <MapContainer
            center={collegePosition}
            zoom={16}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={collegePosition}>
              <Popup>Sri Shanmugha Educational Institutions</Popup>
            </Marker>
          </MapContainer>
        </Box>
      )}
    </Box>
  );
};

export default TrackBus;
