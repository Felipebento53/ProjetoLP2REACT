import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./FormStyle.css";

export default function FormCadProduto(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Tipo de Produto</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="ProdutoFisico" selected>Produto Fisico</option>
            <option value="Produto Digital">Produto Digital</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do produto..."
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Porte do Produto</Form.Label>
          <InputGroup hasValidation>
            <Form.Select aria-label="*">
                <option value="Pequeno" selected>Pequeno Porte</option>
                <option value="Medio">Medio porte</option>
                <option value="Grande">Grande porte</option>
                <option value="Digital">Digital</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Valor do Produto(R$)</Form.Label>
          <Form.Control type="number" placeholder="Valor..." required />
          <Form.Control.Feedback type="invalid">
            Por favor, diga o valor do produto!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button variant='dark' className='cad-produto-button' type="submit">Cadastrar Produto</Button>
      <Button variant='warning' className='cad-produto-button' onClick={()=>{
        props.exibirFormulario(false);
      }}>Voltar</Button>
    </Form>
  );
}

