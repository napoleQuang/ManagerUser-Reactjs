import Header from "./component/Header";
import Tables from "./component/Tables";

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Tables />
      </Container>
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  );
}

export default App;
