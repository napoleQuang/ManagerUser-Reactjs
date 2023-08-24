import Header from "./component/Header";
import Tables from "./component/Tables";
import Home from "./component/Home";

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home />
      </Container>
     
    </div>
  );
}

export default App;
