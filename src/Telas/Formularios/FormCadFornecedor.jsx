import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Alert, Container } from 'react-bootstrap';


export default function FormCadFornecedor(props) {
    const estadoInicialFornecedor = props.fornecedorEdicao
    const [fornecedor, setFornecedor] = useState(props.fornecedorEdicao);
    const [formValidado, setFormValidado] = useState(false);
    const [alerta, setAlerta] = useState(false);

    function ManipularMudancas(e) {
        const componente = e.currentTarget;
        setFornecedor({ ...fornecedor, [componente.name]: componente.value });
    }

    function ManipularSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setLista([...props.lista, fornecedor])
            }
            else {
                props.setLista([...props.lista.filter((itemFornecedor) => itemFornecedor.cnpj !== fornecedor.cnpj)])
                props.setLista([...props.lista, fornecedor])
                props.setEdicao(false)
            }
            setFornecedor(estadoInicialFornecedor);
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }

        if (!form.checkValidity()) {
            setAlerta(false);
        }
        else {
            setAlerta(true);
            setTimeout(() => {
                setAlerta(false);
            }, 3000);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={ManipularSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label>Nome do Fornecedor</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome..."
                            name='nome-fornecedor'
                            id='nome-fornecedor'
                            value={fornecedor.nome}
                            onChange={ManipularMudancas}
                        />
                        <Form.Control.Feedback type='invalid'>Informe o nome!!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom02">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="00.000.000/0001-00"
                            name='cnpj'
                            id='cnpj'
                            value={fornecedor.cnpj}
                            onChange={ManipularMudancas}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Cidade do fornecedor..." id='cidade-fornecedor' name='cidade-fornecedor' value={fornecedor.cidade} onChange={ManipularMudancas} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor digite a cidade!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>UF</Form.Label>
                        <Form.Select aria-label="Unidades Federativas brasileiras" name='uf-fornecedor' id='uf-fornecedor' onChange={ManipularMudancas} value={fornecedor.uf} required>
                            <option value="SP" selected>São Paulo</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Por favor selecione o estado!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="CEP do fornecedor..." id='cep-fornecedor' name='cep-fornecedor' value={fornecedor.cep} onChange={ManipularMudancas} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor digite o CEP!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant="dark">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant="warning" onClick={() => {
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
            {alerta && (
                <Alert variant="success" className="mt-3">
                    Cadastro de fornecedor bem-sucedido!
                </Alert>
            )}
        </Container>
    );
}
