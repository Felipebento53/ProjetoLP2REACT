import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";


export default function TabelaFornecedor(props) {
    return (
        <Container>
            <div className="btn-tabela-produto">
                <Button variant="ligth" type="button" onClick={()=>{
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
                
            </Table>
        </Container>
    );
}