import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Typography
} from "@mui/material";

// Fetching real data (assuming a function that fetches real data)

export default function CancelRequests() {
  const [rows, setRows] = useState([]);
  const [emailPreviewId, setEmailPreviewId] = useState(null);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    // For example, if using an API, you can use fetch or axios here to get the data

    const fetchData = async () => {
      try {
        // Example API call (replace with actual endpoint)
        const response = await fetch('/api/cancel-requests');
        const data = await response.json();
        setRows(data);  // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();  // Call the data fetch function when the component mounts
  }, []);

  const handleApprove = (id) => {
    const updated = rows.map((row) =>
      row.id === id ? { ...row, status: "Approved" } : row
    );
    setRows(updated);
    setEmailPreviewId(id); // Show email preview
  };

  const handleReject = (id) => {
    const updated = rows.map((row) =>
      row.id === id ? { ...row, status: "Rejected" } : row
    );
    setRows(updated);
    setEmailPreviewId(null); // Hide preview if rejected
  };

  const handleClosePreview = () => {
    setEmailPreviewId(null);
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#e6f2ff", minHeight: "100vh" }}>
      <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
        CANCEL TRANSPORT REQUESTS
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()}
        style={{ marginBottom: 20 }}
      >
        Back
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>SIN No</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Dept</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Route</b></TableCell>
              <TableCell><b>Reason</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Application ID</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{row.sin}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dept}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.route}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.requestId}</TableCell>
                <TableCell>
                  <span
                    style={{
                      backgroundColor:
                        row.status === "Approved"
                          ? "green"
                          : row.status === "Rejected"
                          ? "red"
                          : "#ffc107",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Sample Email Preview */}
      {emailPreviewId && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            backgroundColor: "#fff",
            border: "2px solid #2196f3",
            borderRadius: 10,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Sample Email Content Sent to Student
          </Typography>
          <Typography paragraph>
            Dear Student,<br /><br />
            Your transport facility cancellation request has been approved successfully.
          </Typography>
          <Typography paragraph>
            <b>Reason:</b> {rows.find(r => r.id === emailPreviewId)?.reason}
          </Typography>
          <Typography paragraph>
            <b>Request ID:</b> {rows.find(r => r.id === emailPreviewId)?.requestId}
          </Typography>
          <Typography paragraph>
            <b>Date:</b> {rows.find(r => r.id === emailPreviewId)?.date}
          </Typography>
          <Typography paragraph>
            If you have any questions, please contact the Transport Office.<br /><br />
            Thank you!
          </Typography>
          <Button onClick={handleClosePreview} variant="outlined" color="primary">
            Close
          </Button>
        </div>
      )}
    </div>
  );
}
