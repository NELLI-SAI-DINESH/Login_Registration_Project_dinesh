import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import './App.css';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';



function App() {
  //sessionStorage.setItem("isLoggedIn",false)
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path='/dashBoardPage' element={<DashboardPage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
