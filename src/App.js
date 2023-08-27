import Header from "./component/Header";
import { UserContext } from './context/UserContext.js';
import Routes from "./routes/Routes";

import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from "react";


function App() {
  const { login } = useContext(UserContext);

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
        <Routes />
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
