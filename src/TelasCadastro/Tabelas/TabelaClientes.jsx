import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";

export default function TabelaClientes(props) {
    return (
        <Container>
            <div className="btn-tabela">
                <Button variant="warning" type="button" onClick={()=>{
                    props.exibirFormulario(true);
                }}>Novo Cliente</Button> 
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela">
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>Maria Aparecida Fake</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19015-000</td>
                    </tr>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>João Augusto Fake</td>
                        <td>Rua das Pedras, n° 36</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19035-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}