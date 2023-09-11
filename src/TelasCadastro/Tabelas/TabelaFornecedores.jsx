import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";

export default function TabelaFornecedor(props) {
    return (
        <Container>
            <div className="btn-tabela">
                <Button variant="warning" type="button" onClick={()=>{
                    props.exibirFormulario(true);
                }}>Novo Fornecedor</Button> 
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela">
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Trasportes</td>
                        <td>00.000.000/0001-00</td>
                        <td>Cascavel</td>
                        <td>PR</td>
                        <td>19028-000</td>
                    </tr>
                    <tr>
                        <td>Amigão Transportadora</td>
                        <td>00.000.000/0001-00</td>
                        <td>Rio de Janeiro</td>
                        <td>RJ</td>
                        <td>19056-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}