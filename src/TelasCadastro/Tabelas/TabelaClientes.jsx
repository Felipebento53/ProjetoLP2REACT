import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";
import CriadorTabela from "../CriadorTabelas";

export default function TabelaClientes(props) {
    return (
        <Container>
            <div className="btn-tabela">
                <Button variant="ligth" type="button" className="btn-tabela1" onClick={()=>{
                    props.exibirFormulario(true);
                }}>Novo Cliente</Button> 
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela">
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Bairro</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <CriadorTabela/>
            </Table>
        </Container>
    );
}