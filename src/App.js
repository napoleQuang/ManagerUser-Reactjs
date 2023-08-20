import Header from "./component/Header";
import Tables from "./component/Tables";

import Container from 'react-bootstrap/Container';

function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <div className="my-3 d-flex justify-content-between align-items-center">
          <span>List Users:</span>
          <button type="button" class="btn btn-success">Add User</button>
        </div>
        <Tables />
      </Container>

    </div>
  );
}

export default App;
