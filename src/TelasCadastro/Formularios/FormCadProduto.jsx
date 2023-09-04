import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import './FormStyle.css';

export function FormCadProduto(props){
    return (
        <Container className="form-cad-produto">
            <Form.Select labe="Tipo de Produto" className="cad-produto-select">
                <option disabled>Tipo de Produto</option>
                <option >Produto Fisico</option>
                <option >Produto Digital</option>
             </Form.Select>
        </Container>
    );
}