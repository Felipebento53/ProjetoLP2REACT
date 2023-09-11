import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";

export default function TabelaProdutos(props) {
    return (
        <Container>
            <div className="btn-tabela">
                <Button variant="warning" type="button" onClick={()=>{
                    props.exibirFormulario(true);
                }}>Novo Produto</Button>
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela"> 
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Tamanho</th>
                        <th>Valor(R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Produto fisico</td>
                        <td>Notebook </td>
                        <td>Medio Porte</td>
                        <td>6599,00</td>
                    </tr>
                    <tr>
                        <td>Produto Digital</td>
                        <td>Chave de ativação Windows</td>
                        <td>Digital</td>
                        <td>150,00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}