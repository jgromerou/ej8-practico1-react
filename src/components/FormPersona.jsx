import { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

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
    agregarPersona({ nombre, apellido, dni, email });
  };

  const agregarPersona = (persona) => {
    setListaPersonas([...listaPersonas, persona]);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agregó correctamente la nueva persona',
      showConfirmButton: false,
      timer: 1500,
    });
    setNombre('');
    setApellido('');
    setDni('');
    setEmail('');
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold text-center text-lg-start">
            Administrar Personas
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Label className="display-6 mb-3 mt-1">
              <em>Ingrese nueva persona:</em>
            </Form.Label>
            <Form.Group className="mb-4" controlId="nombrePersona">
              <Form.Label className="fw-bold">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la persona"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="apellidoPersona">
              <Form.Label className="fw-bold">Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido de la persona"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="dniPersona">
              <Form.Label className="fw-bold">
                DNI <em> - sólo números </em>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese DNI de la persona"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="emailPersona">
              <Form.Label className="fw-bold">Email</Form.Label>
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
