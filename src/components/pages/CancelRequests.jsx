import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];
const routesList = ["Salem", "Tiruchengode", "Erode", "Sankari", "Namakkal"];

const CancelRequests = () => {
  const [requests, setRequests] = useState([]);
  const [routeFilter, setRouteFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    const dummyData = [
      { name: "Anu", role: "Student", destination: "Salem", status: "Pending" },
      { name: "Charu", role: "Student", destination: "Namakkal", status: "Rejected" },
      { name: "Elakkiya", role: "Student", destination: "Sankari", status: "Pending" },
      { name: "Farook", role: "Student", destination: "Tiruchengode", status: "Approved" },
      { name: "Geetha", role: "Student", destination: "Namakkal", status: "Rejected" },
      { name: "Hari", role: "Student", destination: "Sankari", status: "Pending" },
      { name: "Jagan", role: "Student", destination: "Salem", status: "Approved" },
      { name: "Mani", role: "Student", destination: "Erode", status: "Pending" },
      { name: "Praveen", role: "Student", destination: "Sankari", status: "Approved" },
      { name: "Sangeetha", role: "Student", destination: "Namakkal", status: "Pending" },
    ];
    setRequests(dummyData);
  }, []);

  const filteredRequests = requests.filter(req =>
    (routeFilter === 'All' || req.destination === routeFilter) &&
    (statusFilter === 'All' || req.status === statusFilter)
  );

  const pieData = routesList.map(route => {
    const count = filteredRequests.filter(r => r.destination === route).length;
    return { name: route, value: count };
  });

  const handleStatusChange = (index, newStatus) => {
    const updated = [...filteredRequests];
    updated[index].status = newStatus;
    const all = [...requests];
    const originalIndex = all.findIndex(r => r.name === updated[index].name);
    all[originalIndex].status = newStatus;
    setRequests(all);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ color: '#d32f2f', fontWeight: 'bold', mb: 3 }}>
        ❌ Cancel Requests Overview
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl>
          <InputLabel>Route</InputLabel>
          <Select value={routeFilter} onChange={e => setRouteFilter(e.target.value)} label="Route">
            <MenuItem value="All">All</MenuItem>
            {routesList.map(route => (
              <MenuItem key={route} value={route}>{route}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} label="Status">
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={() => { setRouteFilter('All'); setStatusFilter('All'); }}>
          Reset Filters
        </Button>
      </Box>

      <Box sx={{ height: 300, mb: 4 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Box>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#c62828', color: 'white' }}>
              <th>Name</th>
              <th>Role</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length === 0 ? (
              <tr><td colSpan="5">No requests found.</td></tr>
            ) : (
              filteredRequests.map((req, index) => (
                <tr key={index} style={{ backgroundColor: getRowColor(req.status) }}>
                  <td>{req.name}</td>
                  <td>{req.role}</td>
                  <td>{req.destination}</td>
                  <td>{req.status}</td>
                  <td>
                    <Button
                      onClick={() => handleStatusChange(index, 'Approved')}
                      disabled={req.status !== 'Pending'}
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{ mr: 1 }}
                    >Approve</Button>
                    <Button
                      onClick={() => handleStatusChange(index, 'Rejected')}
                      disabled={req.status !== 'Pending'}
                      variant="contained"
                      color="error"
                      size="small"
                    >Reject</Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

const getRowColor = (status) => {
  switch (status) {
    case 'Approved': return '#e8f5e9';
    case 'Rejected': return '#ffebee';
    case 'Pending': return '#fffde7';
    default: return 'white';
  }
};

export default CancelRequests;




