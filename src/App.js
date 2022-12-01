import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  );
};

export default App;