
import './App.css';
import "./asserts/sb-admin.css";
import "./asserts/sb-admin-2.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ForgetPasswordPage from './ForgetPasswordPage';
import Portal from './Portal';
import DashBoard from './DashBoard';
import ResetPasswordPage from './ResetPasswordPage';
import CreateLinkPage from './CreateLinkPage';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>

    <Route path="/" element={<RegisterPage/>}></Route>
<Route path='/login' element={<LoginPage/>}></Route>
<Route path='/forget-password' element={<ForgetPasswordPage/>}></Route>
<Route path="/reset-password/:token" element={<ResetPasswordPage/>}></Route>

<Route path="/portal" element={<Portal/>}> 
 
    <Route path="create-link" element={<CreateLinkPage/>}></Route>
    <Route path="dashboard" element={<DashBoard />}></Route>
    </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
