import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button, Paper, Select, MenuItem, Typography, Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Utility to generate request ID
const generateRequestId = (sin) => {
  const timestamp = Date.now().toString().slice(-5);
  return `REQ-${sin}-${timestamp}`;
};

// Utility to get today's date
const getCurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-GB");
};

// Filter options
const routeOptions = ["All", "Sankari", "Salem", "Erode", "Edappadi", "Tiruchengode"];
const statusOptions = ["All", "Approved", "Rejected", "Pending"];
const departmentOptions = ["All", "CSE", "IT", "AIDS", "ECE", "MEC", "CYBER", "AGRI"];

export default function ApplyRequests() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]); // No dummy data
  const [routeFilter, setRouteFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [emailPreview, setEmailPreview] = useState(null);

  const handleApprove = (id) => {
    const updated = rows.map((row) => {
      if (row.id === id) {
        setEmailPreview(row);
        return { ...row, status: "Approved" };
      }
      return row;
    });
    setRows(updated);
  };

  const handleReject = (id) => {
    const rejectedRow = rows.find(row => row.id === id);
    if (rejectedRow) {
      alert(`Email to ${rejectedRow.name} (${rejectedRow.email}): Your transport request has been rejected.`);
      const updated = rows.map((row) =>
        row.id === id ? { ...row, status: "Rejected" } : row
      );
      setRows(updated);
    }
  };

  const filteredRows = rows.filter((row) => {
    const routeMatch = routeFilter === "All" || row.route === routeFilter;
    const statusMatch = statusFilter === "All" || row.status === statusFilter;
    const deptMatch = deptFilter === "All" || row.dept === deptFilter;
    return routeMatch && statusMatch && deptMatch;
  });

  return (
    <div style={{ padding: 20, backgroundColor: "#e6f2ff", minHeight: "100vh" }}>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 2 }}>← Back</Button>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        MANAGE TRANSPORT REQUESTS
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        <Select value={routeFilter} onChange={(e) => setRouteFilter(e.target.value)}>
          {routeOptions.map((route) => (
            <MenuItem key={route} value={route}>{route}</MenuItem>
          ))}
        </Select>

        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>{status}</MenuItem>
          ))}
        </Select>

        <Select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
          {departmentOptions.map((dept) => (
            <MenuItem key={dept} value={dept}>{dept}</MenuItem>
          ))}
        </Select>
      </Box>

      {emailPreview && (
        <Paper style={{ padding: 16, marginBottom: 20, backgroundColor: "#fff5e6" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Email Preview</Typography>
          <Typography><b>To:</b> {emailPreview.email}</Typography>
          <Typography><b>Subject:</b> Transport Request Approved - Payment Link</Typography>
          <Typography paragraph>
            Dear {emailPreview.name},<br />
            Your transport request has been approved.<br />
            Please complete the payment using the following link:<br />
            <a href="https://sample-college.com/payment-form" target="_blank" rel="noopener noreferrer">
              https://sample-college.com/payment-form
            </a><br /><br />
            Thank you,<br />
            Transport Admin
          </Typography>
          <Button variant="contained" onClick={() => setEmailPreview(null)}>Close</Button>
        </Paper>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Application ID</b></TableCell>
              <TableCell><b>SIN No</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Dept</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Route</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} align="center">
                  No transport requests found.
                </TableCell>
              </TableRow>
            ) : (
              filteredRows.map((row, idx) => (
                <TableRow key={row.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row.requestId}</TableCell>
                  <TableCell>{row.sin}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.dept}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.route}</TableCell>
                  <TableCell>{row.requestDate}</TableCell>
                  <TableCell>
                    <span style={{
                      backgroundColor:
                        row.status === "Approved" ? "green" :
                          row.status === "Rejected" ? "red" : "#ffc107",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {row.status === "Pending" ? (
                      <>
                        <Button onClick={() => handleApprove(row.id)} color="success" size="small">Approve</Button>
                        <Button onClick={() => handleReject(row.id)} color="error" size="small">Reject</Button>
                      </>
                    ) : (
                      <span style={{ color: "gray" }}>—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
