import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import "./FormStyle.css";
import { Container } from 'react-bootstrap';


export default function FormCadProduto(props) {
  const [validated, setValidated] = useState(false);
  const [alerta, setAlerta] = useState(false);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    props.setProduto({ ...props.produto, [componente.name]: componente.value });
  }

  function handleSubmit(event){
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setAlerta(true);
      setValidated(true);
      const lista = JSON.parse(localStorage.getItem("produtos"))
      let json = props.produto
      json.id = lista.length + 1 
      lista.push(json)
      localStorage.setItem("produtos",JSON.stringify(lista))
      setTimeout(() => {
        setAlerta(false);
        setValidated(false)
        props.setProduto(props.tipoJson)
      }, 3000);
    }
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
    
  };

  return (
    <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="2" controlId="TipoProduto">
                    <Form.Label>Tipo de Produto</Form.Label>
                    <Form.Select aria-label="Default select example" value={props.produto.tipo} name="tipo" onChange={manipularMudancas}>
                      <option value="Produto Fisico">Produto Fisico</option>
                      <option value="Produto Digital">Produto Digital</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="NomeProduto">
                    <Form.Label>Nome do Produto</Form.Label>
                    <Form.Control
                      required
                      value={props.produto.nome}
                      name="nome"
                      type="text"
                      placeholder="Nome do produto..."
                      onChange={manipularMudancas}
                    />
                    <Form.Control.Feedback>Verificado!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="Categoria">
                    <Form.Label>Categoria</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Select aria-label="*" value={props.produto.categoria} name="categoria" onChange={manipularMudancas}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
            </Row>
          <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="PorteProduto">
                    <Form.Label>Porte do Produto</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Select aria-label="*" value={props.produto.porte} name="porte" onChange={manipularMudancas}>
                        <option value="Pequeno">Pequeno Porte</option>
                        <option value="Medio">Medio porte</option>
                        <option value="Grande">Grande porte</option>
                        <option value="Digital">Digital</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
            <Form.Group as={Col} md="3" controlId="ValorProduto">
              <Form.Label>Valor do Produto(R$)</Form.Label>
              <Form.Control type="number" placeholder="Valor..." value={props.produto.preco} required name="preco" onChange={manipularMudancas}/>
              <Form.Control.Feedback type="invalid">
                Por favor, diga o valor do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button variant='dark' className='cad-produto-button' type="submit">Cadastrar Produto</Button>
          <Button variant='warning' className='cad-produto-button' onClick={() => {
            props.exibirFormulario(false);
          }}>Voltar</Button>
          {alerta && (
            <Alert variant="success" className="mt-3">
              Cadastro bem-sucedido! Esta mensagem desaparecerá em 3 segundos.
            </Alert>
          )}
        </Form>
    </Container>
  );
}

