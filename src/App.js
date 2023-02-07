import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Container } from "react-bootstrap";
import  LoginScreen  from './components/screens/LoginScreen';
import  RegisterScreen  from './components/screens/RegisterScreen';
import  Header  from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import "./bootstrap.min.css";

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/register" element={<RegisterScreen/>}/>
  
        </Routes>
      </Router> 
    
  );
}

export default App;
