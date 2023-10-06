import { useState } from "react";
import { Container } from "react-bootstrap";
import Page from "../Templates/Page";
import FormCadProduto from "./Formularios/FormCadProduto";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import "./Telas.css";

export default function TelaCadastroProduto(props) {
    
    if(localStorage.getItem("produtos")==null)
        localStorage.setItem("produtos",JSON.stringify([]))
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const tipoJson = {
        "id":0,
        "tipo":"Produto Fisico",
        "nome":"",
        "categoria": "A",
        "porte":"Pequeno",
        "preco":""
    }
    const [produtoEdicao,setProdutoEdicao] = useState(tipoJson)

    return (
        <div className="tela-cad">
            <Container>
                <Page>
                    {
                        exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario} produto={produtoEdicao} setProduto={setProdutoEdicao} tipoJson={tipoJson} /> : <TabelaProdutos exibirFormulario={setExibirFormulario} />
                    }
                </Page>
            </Container>
        </div>
    )
}