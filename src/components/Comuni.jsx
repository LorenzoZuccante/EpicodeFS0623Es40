import { Form } from "react-bootstrap"
import React from 'react';
import Button from 'react-bootstrap/Button';

const Comuni = () => {
    return(
        <>
        <h1>Sono il component comuni</h1>
        <Form>
      <Form.Group controlId="formLocalita">
        <Form.Label>Località</Form.Label>
        <Form.Control type="text" placeholder="Inserisci la località" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
        </>
    )
}
export default Comuni