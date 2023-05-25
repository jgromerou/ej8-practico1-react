import { Card, Form, Button } from 'react-bootstrap';

const FormPersona = () => {
  return (
    <>
      {/* Agrego una card */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
            Administrar Personas
          </Card.Title>
          {/* Agrego un formulario  */}
          <Form>
            <Form.Label className="display-5 mb-3 mt-2">
              <em>Ingrese nueva persona:</em>
            </Form.Label>
            <Form.Group className="mb-3" controlId="nombrePersona">
              <Form.Label className="display-6">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de la persona"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="apellidoPersona">
              <Form.Label className="display-6">Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido de la persona"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dniPersona">
              <Form.Label className="display-6">DNI</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese DNI de la persona"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailPersona">
              <Form.Label className="display-6">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email de la persona"
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
