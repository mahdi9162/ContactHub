import { createContext, useState } from 'react';
import './App.css';
import ManageComp from './Components/ManagementComp/manageComp';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

export const PersonContext = createContext('');

function App() {
  const [person, setPerson] = useState([]);

  return (
    <>
      <PersonContext.Provider value={[person, setPerson]}>
        <Navbar></Navbar>
        <ManageComp></ManageComp>
      </PersonContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
