import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ApplyTransport = () => {
  const navigate = useNavigate();
  const [sin, setSin] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [busRoute, setBusRoute] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [address, setAddress] = useState('');
  const [showID, setShowID] = useState(false);
  const [generatedID, setGeneratedID] = useState('');

  const handleNext = async () => {
    // You can replace the below mock fetch with your actual backend call
    // Example:
    // const res = await fetch(`/api/student/${sin}`);
    // const data = await res.json();
    // setStudentData(data);

    // TEMP MOCK LOGIC (REMOVE THIS IN FINAL)
    if (sin.trim() === '') {
      alert('Please enter a valid SIN number');
      return;
    }

    // Example response from backend (replace with real data)
    const data = {
      name: '',
      fatherName: '',
      email: '',
      year: '',
      college: '',
      mobile: '',
    };

    setStudentData(data);
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (!busRoute || !applicationDate || !address.trim()) {
      alert('Please fill in all the fields before submitting.');
      return;
    }
    const id = 'TID' + Math.floor(Math.random() * 100000);
    setGeneratedID(id);
    setShowID(true);

    // You can send this data to the backend here
    // Example:
    // fetch('/api/apply', {
    //   method: 'POST',
    //   body: JSON.stringify({ sin, ...studentData, busRoute, applicationDate, address, requestId: id })
    // });
  };

  return (
    <div
      style={{
        backgroundColor: '#e3f2fd',
        minHeight: '100vh',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!showForm ? (
        <div
          style={{
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            width: '500px',
          }}
        >
          <h2>Student Apply Transport</h2>
          <label><strong>Enter your SIN Number:</strong></label>
          <input
            type="text"
            value={sin}
            onChange={(e) => setSin(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              margin: '10px 0 20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <button onClick={handleNext} style={{ padding: '10px 20px' }}>Next</button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#fff',
            padding: '50px',
            borderRadius: '12px',
            width: '550px',
            textAlign: 'left',
            position: 'relative',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            style={{ position: 'absolute', top: '20px', right: '20px' }}
          >
            ← Back
          </Button>

          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Student Transport Form</h2>

          <p><strong>SIN Number:</strong> {sin}</p>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Father Name:</strong> {studentData.fatherName}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Year:</strong> {studentData.year}</p>
          <p><strong>College:</strong> {studentData.college}</p>
          <p><strong>Mobile:</strong> {studentData.mobile}</p>

          <label><strong>Date of Application:</strong></label>
          <input
            type="date"
            value={applicationDate}
            onChange={(e) => setApplicationDate(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              margin: '10px 0 20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />

          <label><strong>Select Bus Route:</strong></label>
          <select
            value={busRoute}
            onChange={(e) => setBusRoute(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              margin: '10px 0 20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">--Select--</option>
            <option value="Salem">Salem</option>
            <option value="Thiruchengode">Thiruchengode</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Sankari">Sankari</option>
            <option value="Kumarapalayam">Kumarapalayam</option>
          </select>

          <label><strong>Address:</strong></label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            placeholder="Enter your full address"
            style={{
              padding: '10px',
              width: '100%',
              margin: '10px 0 20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>
              Submit Request
            </button>
          </div>

          {showID && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p><strong>Generated ID:</strong> {generatedID}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplyTransport;
