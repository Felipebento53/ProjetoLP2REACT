import TelaCadastroCliente from "./TelasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./TelasCadastro/TelaCadastroProduto";
import TelaCadastroFornededor from "./TelasCadastro/TelaCadastroFornecedor";
import TelaHome from "./TelasCadastro/TelaHome";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TelaHome />}/>
        <Route path='/cliente' element={<TelaCadastroCliente />}/>
        <Route path='/produto' element={<TelaCadastroProduto />}/>
        <Route path='/fornecedor' element={<TelaCadastroFornededor />}/>
      </Routes>
    </>
  );
}

export default App;
