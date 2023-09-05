import { useState } from "react";
import { Container } from "react-bootstrap";
import Page from "../Templates/Page";
import FormCadProduto from "./Formularios/FormCadProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import "./Telas.css";

export default function TelaCadastroProduto(props) {

    const [exibirFormulario, setExibirFormulario] = useState(false);

    return (
        <div className="tela-cad">
            <Container>
                <Page>
                    {
                        exibirFormulario ? <FormCadProduto /> : <TabelaProdutos />
                    }
                </Page>
            </Container>
        </div>
    );
}