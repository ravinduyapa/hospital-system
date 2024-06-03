import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPatient from './component/LoginSignUp/AddPatient';
import ViewAppointment from './component/LoginSignUp/ViewAppointment';
import Menu from './component/LoginSignUp/Menu';
import LoginSignUp from './component/LoginSignUp/LoginSignUp'; 
import PayFromCreditCard from './component/LoginSignUp/PayFromCreditCard';
import PayFromCash from './component/LoginSignUp/PayFromCash';
import AddmedicalTest from './component/LoginSignUp/AddmedicalTest';
import ViewAllMedicalTest from './component/LoginSignUp/ViewAllMedicalTest';
import SuperAdmin from './component/LoginSignUp/SuperAdmin';
import AddReport from './component/LoginSignUp/AddReport';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/view-appointment" element={<ViewAppointment />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route exact path="/" element={<LoginSignUp />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/pay-from-cash" element={<PayFromCash />}/>
        <Route path="/pay-from-credit-card" element={<PayFromCreditCard />}/>
        <Route path="/super-admin-add-medical-test" element={<AddmedicalTest />}/>
        <Route path="/super-admin-view-all-medical-test" element={<ViewAllMedicalTest />}/>
        <Route path="/super-admin-menu" element={<SuperAdmin />}/>
        <Route path="/super-admin-report" element={<AddReport />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
