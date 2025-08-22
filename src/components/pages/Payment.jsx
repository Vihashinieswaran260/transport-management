import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  // Empty data array (you can fetch data from backend later)
  const [data, setData] = useState([]);

  return (
    <Box sx={{ p: 4, bgcolor: "#e3f2fd", minHeight: "100vh" }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "white",
          mb: 2,
          bgcolor: "#0d47a1",
          p: 1,
          borderRadius: 1,
        }}
      >
        Student Payment Status
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#ffffff" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Application ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>SIN</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Fees</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Payment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No records available
                </TableCell>
              </TableRow>
            ) : (
              data.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.applicationId}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.sin}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.fees}</TableCell>
                  <TableCell>{student.status}</TableCell>
                  <TableCell>{student.paymentDate}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Payment;
