import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DriverDetails = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("list");
  const [drivers, setDrivers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [newDriver, setNewDriver] = useState({
    name: '',
    age: '',
    address: '',
    license: '',
    licenseName: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriver({ ...newDriver, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const licenseURL = URL.createObjectURL(file);
      setNewDriver({ ...newDriver, license: licenseURL, licenseName: file.name });
    }
  };

  const handleAddOrUpdateDriver = () => {
    if (!newDriver.name || !newDriver.age || !newDriver.address || !newDriver.license || !newDriver.experience) {
      alert("Please fill all fields and upload the license.");
      return;
    }

    if (editIndex !== null) {
      const updatedDrivers = [...drivers];
      updatedDrivers[editIndex] = { ...newDriver, id: updatedDrivers[editIndex].id };
      setDrivers(updatedDrivers);
      setEditIndex(null);
    } else {
      const newDriverData = {
        ...newDriver,
        id: Date.now(),
      };
      setDrivers([...drivers, newDriverData]);
    }

    setNewDriver({
      name: '',
      age: '',
      address: '',
      license: '',
      licenseName: '',
      experience: '',
    });

    setView("list");
  };

  const handleEditDriver = (index) => {
    const driverToEdit = drivers[index];
    setNewDriver({ ...driverToEdit });
    setEditIndex(index);
    setView("form");
  };

  const handleDeleteDriver = (id) => {
    const updatedDrivers = drivers.filter(driver => driver.id !== id);
    setDrivers(updatedDrivers);
  };

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#e3f2fd', minHeight: '100vh' }}>
      <Box display="flex" gap={2} alignItems="center" mb={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>

        <Button
          variant={view === "list" ? "contained" : "outlined"}
          onClick={() => {
            setView("list");
            setEditIndex(null);
            setNewDriver({
              name: '',
              age: '',
              address: '',
              license: '',
              licenseName: '',
              experience: '',
            });
          }}
          color="primary"
        >
          Driver List
        </Button>

        <Button
          variant={view === "form" ? "contained" : "outlined"}
          onClick={() => {
            setView("form");
            setEditIndex(null);
            setNewDriver({
              name: '',
              age: '',
              address: '',
              license: '',
              licenseName: '',
              experience: '',
            });
          }}
          color="primary"
        >
          {editIndex !== null ? "Edit Driver" : "Add Driver"}
        </Button>
      </Box>

      {view === "list" ? (
        <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
          <Typography variant="h5" gutterBottom>
            Driver List
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Age</strong></TableCell>
                  <TableCell><strong>Address</strong></TableCell>
                  <TableCell><strong>License</strong></TableCell>
                  <TableCell><strong>Experience</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {drivers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No drivers added yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  drivers.map((driver, index) => (
                    <TableRow key={driver.id}>
                      <TableCell>{driver.name}</TableCell>
                      <TableCell>{driver.age}</TableCell>
                      <TableCell>{driver.address}</TableCell>
                      <TableCell>
                        {driver.license ? (
                          <a href={driver.license} target="_blank" rel="noopener noreferrer">
                            {driver.licenseName || "View License"}
                          </a>
                        ) : (
                          "No File"
                        )}
                      </TableCell>
                      <TableCell>{driver.experience}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          color="info"
                          sx={{ mr: 1 }}
                          onClick={() => handleEditDriver(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          onClick={() => handleDeleteDriver(driver.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      ) : (
        <Card sx={{ p: 3, bgcolor: '#ffffff' }}>
          <Typography variant="h5" gutterBottom>
            {editIndex !== null ? "Edit Driver" : "Add New Driver"}
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={newDriver.name}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Age"
            name="age"
            value={newDriver.age}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Address"
            name="address"
            value={newDriver.address}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
            License (PDF):
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Experience"
            name="experience"
            value={newDriver.experience}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleAddOrUpdateDriver} fullWidth>
            {editIndex !== null ? "Update Driver" : "Add Driver"}
          </Button>
        </Card>
      )}
    </Box>
  );
};

export default DriverDetails;
