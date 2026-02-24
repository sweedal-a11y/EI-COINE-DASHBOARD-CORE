import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import EmailVerificationPending from './EmailVerificationPending';
import EmailConfirmationSuccess from './EmailConfirmationSuccess';
import AccountInformation from './AccountInformation';
import Register4 from './Register4';
import Register5 from './Register5';
import Register7 from './Register7';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/email-verification-pending" element={<EmailVerificationPending />} />
          <Route path="/email-confirmation-success" element={<EmailConfirmationSuccess />} />
          <Route path="/account-information" element={<AccountInformation />} />
          <Route path="/register-4" element={<Register4 />} />
          <Route path="/register-5" element={<Register5 />} />
          <Route path="/register-7" element={<Register7 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
