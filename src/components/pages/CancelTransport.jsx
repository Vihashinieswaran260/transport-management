import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CancelTransport = () => {
  const navigate = useNavigate();
  const [sin, setSin] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [cancelId, setCancelId] = useState('');

  const generateId = () => {
    return `CXL-${Math.floor(Math.random() * 1000000)}`; // Random ID generation
  };

  const handleCancelRequest = () => {
    if (!sin.trim() || !reason.trim() || !date) {
      alert("Please fill in all fields.");
      return;
    }
    setConfirmCancel(true);
  };

  const handleConfirmCancel = () => {
    const id = generateId(); // Generate a cancellation ID
    setCancelId(id); // Set the generated ID
    setIsCanceled(true);
    setConfirmCancel(false);
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
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          width: '500px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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

        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Cancel Transport Request
        </h2>

        {!isCanceled ? (
          <>
            <TextField
              label="Enter your SIN Number"
              value={sin}
              onChange={(e) => setSin(e.target.value)}
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="Date of Cancellation"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="Reason for Cancellation"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              fullWidth
              multiline
              rows={4}
              style={{ marginBottom: '20px' }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelRequest}
              fullWidth
              style={{ padding: '10px' }}
            >
              Cancel Request
            </Button>

            {confirmCancel && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>Are you sure you want to cancel your transport request?</p>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleConfirmCancel}
                  style={{ marginRight: '10px' }}
                >
                  Confirm Cancel
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setConfirmCancel(false)}
                >
                  Go Back
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>
              Your transport request has been canceled.
            </p>
            <p><strong>Reason:</strong> {reason}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Cancellation ID:</strong> {cancelId}</p>
            <Button
              variant="outlined"
              onClick={() => navigate('/student-dashboard')}
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Go Back
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CancelTransport;
