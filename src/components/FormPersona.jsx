import { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const FormPersona = () => {
  let personaLocalStorage =
    JSON.parse(localStorage.getItem('listaPersonas')) || [];
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState(0);
  const [email, setEmail] = useState('');

  const [listaPersonas, setListaPersonas] = useState(personaLocalStorage);

  useEffect(() => {
    localStorage.setItem('listaPersonas', JSON.stringify(listaPersonas));
  }, [listaPersonas]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nombre, apellido, dni, email);
    agregarPersona({ nombre, apellido, dni, email });
  };

  const agregarPersona = (persona) => {
    setListaPersonas([...listaPersonas, persona]);
    setNombre('');
    setApellido('');
    setDni(0);
    setEmail('');
  };

  return (
    <>
      {/* Agrego una card */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
            Administrar Personas
          </Card.Title>
          {/* Agrego un formulario  */}
          <Form onSubmit={handleSubmit}>
            <Form.Label className="display-5 mb-3 mt-2">
              <em>Ingrese nueva persona:</em>
            </Form.Label>
            <Form.Group className="mb-3" controlId="nombrePersona">
              <Form.Label className="display-6">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la persona"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="apellidoPersona">
              <Form.Label className="display-6">Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido de la persona"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dniPersona">
              <Form.Label className="display-6">DNI</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese DNI de la persona"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailPersona">
              <Form.Label className="display-6">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email de la persona"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-2">
              Agregar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormPersona;
