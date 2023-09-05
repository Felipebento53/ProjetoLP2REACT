import { Container } from "react-bootstrap";
import { useState } from "react";
import Page from "../Templates/Page";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import "./Telas.css";



export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return (
        <div className="tela-cad">
            <Container>
                <Page>
                    {
                        //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                        //e a visualização do registros já cadastrados.
                        exibirFormulario ? <FormCadFornecedor /> : <TabelaFornecedores />
                    }
                </Page>
            </Container>
        </div>
    )
}