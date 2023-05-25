import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import FormPersona from './components/FormPersona';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <FormPersona />
      </Container>
      <Footer />
    </>
  );
}

export default App;
