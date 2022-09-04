import React, { useState, useEffect } from 'react';
import './App.css';
import CardPage from './components/cardpage';
import NavBar from './components/navBar';
import Dashboard from './components/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './components/history';
import axios from "axios";
import Login from './components/login';
import AddComplaint from './components/addComplaint';

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (userinfo:AppProps) => {
  interface compaint {
    _id: string,
    name: string,
    rollno: string,
    desp: string,
    status: string
  }
  useEffect(() => {
    axios
      .get<complaints>("http://localhost:5000/dataset/")
      .then((response: any) => {
        setData(response.data)
      })
      .catch((error: any) => {
        console.log(error);
      });
  })
  type complaints = compaint[];
  const [data, setData] = useState<complaints>([]);
  const comp: complaints = data
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><NavBar></NavBar><Dashboard complaints={comp}></Dashboard></div>} />
          <Route path="/complaint" element={<div><NavBar></NavBar><CardPage complaints={comp}></CardPage></div>}></Route>
          <Route path="/history" element={<div><NavBar></NavBar><History complaints={comp}></History></div>}></Route>
          <Route path="/add" element={<div><NavBar></NavBar><AddComplaint></AddComplaint></div>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

