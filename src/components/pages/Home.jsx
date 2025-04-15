import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#AA336A"];

const Home = () => {
  const [students, setStudents] = useState([]);
  const [totalUsers, setTotalUsers] = useState(200); // Example total users
  const [routeCounts, setRouteCounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/apply")
      .then((response) => {
        setStudents(response.data);

        const routeMap = {};
        response.data.forEach((student) => {
          routeMap[student.route] = (routeMap[student.route] || 0) + 1;
        });

        const routeData = Object.entries(routeMap).map(([route, count]) => ({
          name: route,
          value: count,
        }));

        setRouteCounts(routeData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const appliedChart = [
    { name: "Applied", value: students.length },
    { name: "Not Applied", value: totalUsers - students.length },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#0d47a1" }}>
        Transport Dashboard
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This dashboard provides insights into students using the college transport system.
        You can view how many students have applied for transport and how they are distributed across routes.
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={6}>
        {/* Applied vs Not Applied Pie Chart */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Applied vs Not Applied
          </Typography>
          <PieChart width={350} height={300}>
            <Pie
              data={appliedChart}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {appliedChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>

        {/* Route Distribution Pie Chart */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Route Distribution
          </Typography>
          <PieChart width={350} height={300}>
            <Pie
              data={routeCounts}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {routeCounts.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

