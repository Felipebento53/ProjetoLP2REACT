import { Container } from "react-bootstrap";
import Page from "../Templates/Page";
import FormCadCliente from "./Formularios/FormCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { useState } from "react";
import "./Telas.css";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return (
        <div className="tela-cad">
            <Container>
                <Page>
                    {
                        //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                        //e a visualização do registros já cadastrados.
                        exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} /> : <TabelaClientes exibirFormulario={setExibirFormulario} />
                    }
                </Page>
            </Container>
        </div>
    )
}