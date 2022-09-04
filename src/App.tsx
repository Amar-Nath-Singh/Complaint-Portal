import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardPage from './components/cardpage';
import NavBar from './components/navBar';
import Dashboard from './components/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './components/history';
import axios from "axios";
import Login from './login';
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
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Dashboard complaints={comp}></Dashboard>} />
          <Route path="/complaint" element={<CardPage complaints={comp}></CardPage>}></Route>
          <Route path="/history" element={<History complaints={comp}></History>}></Route>
          <Route path="/add" element={<AddComplaint></AddComplaint>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

