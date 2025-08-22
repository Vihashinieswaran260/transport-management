import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#64B5F6", "#2196F3", "#1976D2", "#1565C0", "#0D47A1", "#F44336", "#4CAF50"];

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, value }) => {
  const RADIAN = Math.PI / 180;
  const angle = midAngle * RADIAN;
  const x = cx + (outerRadius + 10) * Math.cos(angle);
  const y = cy + (outerRadius + 10) * Math.sin(angle);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central">
      {value}
    </text>
  );
};

const Overview = () => {
  const navigate = useNavigate();

  const [selectedChart, setSelectedChart] = useState("all");

  const [applicationStatusData, setApplicationStatusData] = useState([]);
  const [activeUsersData, setActiveUsersData] = useState([]);
  const [pendingRequestsData, setPendingRequestsData] = useState([]);
  const [totalUsersData, setTotalUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appRes, activeRes, pendingRes, totalRes] = await Promise.all([
          axios.get("/api/application-status"),
          axios.get("/api/active-users"),
          axios.get("/api/pending-requests"),
          axios.get("/api/total-users"), // This should return [{ name: "Total Users", value: <number> }]
        ]);
        setApplicationStatusData(appRes.data);
        setActiveUsersData(activeRes.data);
        setPendingRequestsData(pendingRes.data);
        setTotalUsersData(totalRes.data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#E3F2FD", minHeight: "100vh", padding: "20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#1976D2",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ← Back
      </button>

      <h2><b>Smart Transport Dashboard</b></h2>
      <p>Select charts to view:</p>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <label><input type="radio" name="chart" value="all" checked={selectedChart === "all"} onChange={() => setSelectedChart("all")} /> Show All</label>
        <label><input type="radio" name="chart" value="application" checked={selectedChart === "application"} onChange={() => setSelectedChart("application")} /> Application Status</label>
        <label><input type="radio" name="chart" value="active" checked={selectedChart === "active"} onChange={() => setSelectedChart("active")} /> Active Users</label>
        <label><input type="radio" name="chart" value="pending" checked={selectedChart === "pending"} onChange={() => setSelectedChart("pending")} /> Pending Requests</label>
        <label><input type="radio" name="chart" value="total" checked={selectedChart === "total"} onChange={() => setSelectedChart("total")} /> Total Users</label>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {(selectedChart === "all" || selectedChart === "application") && (
          <ChartCard title="Application Request Status" data={applicationStatusData} />
        )}
        {(selectedChart === "all" || selectedChart === "active") && (
          <ChartCard title="Active Transport Users by Route" data={activeUsersData} />
        )}
        {(selectedChart === "all" || selectedChart === "pending") && (
          <ChartCard title="Pending Requests by Route" data={pendingRequestsData} />
        )}
        {(selectedChart === "all" || selectedChart === "total") && (
          <ChartCard title="Total Transport Users" data={totalUsersData} />
        )}
      </div>
    </div>
  );
};

const ChartCard = ({ title, data }) => {
  return (
    <div style={{ flex: "1 1 45%", backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Overview;
