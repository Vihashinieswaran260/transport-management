import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const vehicleTypes = ['Bus', 'Van', 'Jeep', 'EV Buggy', 'Auto', 'Ambulance', 'JCB', 'Tractor'];
const statuses = ['Active', 'Under Service'];

const VehicleDetailsDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    vehicleNumber: '',
    vehicleType: '',
    fitnessCertificate: null,
    permit: null,
    insurance: null,
    status: ''
  });

  const [vehicleList, setVehicleList] = useState([]);
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);

  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const [maintenanceOpen, setMaintenanceOpen] = useState(false);
  const [maintenanceForm, setMaintenanceForm] = useState({
    vehicleNumber: '',
    issue: '',
    center: '',
    cost: '',
    servicedBy: ''
  });

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const newEntry = {
      id: vehicleList.length + 1,
      ...formData,
      fitnessCertificate: { name: 'Uploaded' },
      permit: { name: 'Uploaded' },
      insurance: { name: 'Uploaded' }
    };
    setVehicleList([...vehicleList, newEntry]);
    setFormData({
      vehicleNumber: '',
      vehicleType: '',
      fitnessCertificate: null,
      permit: null,
      insurance: null,
      status: ''
    });
    setShowForm(false);
    setTab(1);
  };

  const handleEditClick = (vehicle) => {
    setEditData(vehicle);
    setEditOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    const updatedList = vehicleList.map((v) =>
      v.id === editData.id ? editData : v
    );
    setVehicleList(updatedList);
    setEditOpen(false);
  };

  const handleDelete = (id) => {
    const updatedList = vehicleList.filter((v) => v.id !== id);
    setVehicleList(updatedList);
  };

  const handleMaintenanceChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceForm({ ...maintenanceForm, [name]: value });
  };

  const handleMaintenanceSubmit = () => {
    const newEntry = {
      id: maintenanceHistory.length + 1,
      ...maintenanceForm
    };
    setMaintenanceHistory([...maintenanceHistory, newEntry]);
    setMaintenanceForm({
      vehicleNumber: '',
      issue: '',
      center: '',
      cost: '',
      servicedBy: ''
    });
    setMaintenanceOpen(false);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>

      <Typography variant="h4" fontWeight="bold" mb={2}>
        Vehicle List
      </Typography>

      <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Add" sx={{ fontWeight: 'bold' }} />
        <Tab label="Vehicle History" sx={{ fontWeight: 'bold' }} />
        <Tab label="Maintenance History" sx={{ fontWeight: 'bold' }} />
      </Tabs>

      {tab === 0 && !showForm && (
        <Button variant="contained" onClick={() => setShowForm(true)}>
          Add Vehicle
        </Button>
      )}

      {tab === 0 && showForm && (
        <Box component="form" sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, mt: 2 }}>
          <TextField
            label="Vehicle Number"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Vehicle Type"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <Typography mt={2}>Upload Certificates (PDF only)</Typography>
          <Button variant="outlined" component="label" sx={{ mt: 1 }}>
            Fitness Certificate
            <input type="file" name="fitnessCertificate" accept="application/pdf" hidden onChange={handleChange} />
          </Button>
          <Button variant="outlined" component="label" sx={{ mt: 1, ml: 2 }}>
            Permit
            <input type="file" name="permit" accept="application/pdf" hidden onChange={handleChange} />
          </Button>
          <Button variant="outlined" component="label" sx={{ mt: 1, ml: 2 }}>
            Insurance
            <input type="file" name="insurance" accept="application/pdf" hidden onChange={handleChange} />
          </Button>
          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ mt: 3 }}
          >
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            <Button variant="outlined" onClick={() => setShowForm(false)}>Cancel</Button>
          </Box>
        </Box>
      )}

      {tab === 1 && (
        <TableContainer sx={{ backgroundColor: 'white', borderRadius: 2, p: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Vehicle Number</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Fitness Certificate</TableCell>
                <TableCell>Permit</TableCell>
                <TableCell>Insurance</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleList.map((vehicle, index) => (
                <TableRow key={vehicle.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{vehicle.vehicleNumber}</TableCell>
                  <TableCell>{vehicle.vehicleType}</TableCell>
                  <TableCell>{vehicle.fitnessCertificate?.name}</TableCell>
                  <TableCell>{vehicle.permit?.name}</TableCell>
                  <TableCell>{vehicle.insurance?.name}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>
                    <Button size="small" onClick={() => handleEditClick(vehicle)}>Edit</Button>
                    <Button size="small" color="error" onClick={() => handleDelete(vehicle.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
              {vehicleList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} align="center">No vehicles found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {tab === 2 && (
        <>
          <Button variant="contained" onClick={() => setMaintenanceOpen(true)} sx={{ mb: 2 }}>
            Add Maintenance
          </Button>
          <TableContainer sx={{ backgroundColor: 'white', borderRadius: 2, p: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Vehicle Number</TableCell>
                  <TableCell>Issue</TableCell>
                  <TableCell>Service Center</TableCell>
                  <TableCell>Cost</TableCell>
                  <TableCell>Serviced By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {maintenanceHistory.map((entry, index) => (
                  <TableRow key={entry.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{entry.vehicleNumber}</TableCell>
                    <TableCell>{entry.issue}</TableCell>
                    <TableCell>{entry.center}</TableCell>
                    <TableCell>{entry.cost}</TableCell>
                    <TableCell>{entry.servicedBy}</TableCell>
                  </TableRow>
                ))}
                {maintenanceHistory.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No maintenance records.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Vehicle</DialogTitle>
        <DialogContent>
          <TextField
            label="Vehicle Number"
            name="vehicleNumber"
            value={editData?.vehicleNumber || ''}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Vehicle Type"
            name="vehicleType"
            value={editData?.vehicleType || ''}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          >
            {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Status"
            name="status"
            value={editData?.status || ''}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          >
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={maintenanceOpen} onClose={() => setMaintenanceOpen(false)}>
        <DialogTitle>Add Maintenance Record</DialogTitle>
        <DialogContent>
          <TextField
            label="Vehicle Number"
            name="vehicleNumber"
            value={maintenanceForm.vehicleNumber}
            onChange={handleMaintenanceChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Issue"
            name="issue"
            value={maintenanceForm.issue}
            onChange={handleMaintenanceChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Service Center"
            name="center"
            value={maintenanceForm.center}
            onChange={handleMaintenanceChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Cost"
            name="cost"
            value={maintenanceForm.cost}
            onChange={handleMaintenanceChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Serviced By"
            name="servicedBy"
            value={maintenanceForm.servicedBy}
            onChange={handleMaintenanceChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMaintenanceOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleMaintenanceSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VehicleDetailsDashboard;
