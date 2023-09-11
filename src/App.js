import TelaCadastroCliente from "./TelasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./TelasCadastro/TelaCadastroProduto";
import TelaCadastroFornededor from "./TelasCadastro/TelaCadastroFornecedor";
import TelaHome from "./TelasCadastro/TelaHome";
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            //os caminhos(path) devem ser organizados do mais especifico para o mais geral
          }
        <Route path="/cliente" element={<TelaCadastroCliente/>} />
        <Route path="/produto" element={<TelaCadastroProduto/>} />
        <Route path="/fornecedor" element={<TelaCadastroFornededor/>} />
        <Route path="/" element={<TelaHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
