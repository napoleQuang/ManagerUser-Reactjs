import Header from "./component/Header";
import Tables from "./component/Tables";
import Modals from "./component/Modals";

import Container from 'react-bootstrap/Container';
import { useState } from "react";
function App() {
  const [showModal,setShowModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <Container>
        <div className="my-3 d-flex justify-content-between align-items-center">
          <span>List Users:</span>
          <button type="button" class="btn btn-success" onClick={()=>setShowModal(true)}>Add User</button>
        </div>
        <Tables />
      </Container>
      <Modals show={showModal} handleClose={()=>setShowModal(false)} />
    </div>
  );
}

export default App;
