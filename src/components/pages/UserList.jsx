import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Edit, Delete, Save, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const initialData = []; // ✅ Dummy data removed

  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleEdit = (row) => {
    setEditingId(row.id);
    setEditedRow(row);
  };

  const handleSave = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? editedRow : item
    );
    setData(updatedData);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#e0f2fe", minHeight: "100vh" }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 3 }}
        variant="outlined"
      >
        Back
      </Button>

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Existing Users
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#bfdbfe" }}> {/* ✅ Lighter blue */}
            <TableRow>
              {[
                "Application ID",
                "Student Name",
                "Year",
                "Department",
                "SIN No",
                "Email",
                "Address",
                "Bus No",
                "Route",
                "Payment",
                "Actions",
              ].map((heading) => (
                <TableCell key={heading} sx={{ fontWeight: "bold" }}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} align="center">
                  No user data available.
                </TableCell>
              </TableRow>
            ) : (
              data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontWeight: "bold" }}>{row.appId}</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="name"
                        value={editedRow.name}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.name
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="year"
                        value={editedRow.year}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.year
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="department"
                        value={editedRow.department}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.department
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="sin"
                        value={editedRow.sin}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.sin
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="email"
                        value={editedRow.email}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.email
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="address"
                        value={editedRow.address}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.address
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="busNo"
                        value={editedRow.busNo}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.busNo
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="route"
                        value={editedRow.route}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.route
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {editingId === row.id ? (
                      <TextField
                        name="payment"
                        value={editedRow.payment}
                        onChange={handleChange}
                        size="small"
                      />
                    ) : (
                      row.payment
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === row.id ? (
                      <IconButton
                        onClick={() => handleSave(row.id)}
                        color="primary"
                      >
                        <Save />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => handleEdit(row)}
                        color="primary"
                      >
                        <Edit />
                      </IconButton>
                    )}
                    <IconButton
                      onClick={() => handleDelete(row.id)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
