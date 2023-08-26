import Header from "./component/Header";
import Tables from "./component/Tables";
import Home from "./component/Home";
import Login from "./component/Login";
import { UserContext } from './context/UserContext.js';

import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useContext,useEffect } from "react";


function App() {
  const { login} = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      login(localStorage.getItem('email'));
    }
  }, []);

  console.log(localStorage.getItem('token'));
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Tables />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
