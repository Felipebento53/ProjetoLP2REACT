import React from "react";

export default function CriadorTabela(props) {
  var lista = JSON.parse(localStorage.getItem("lista"))
  if(lista==null)
    lista=[]
  const rows = []
  for (let i = 0; i < lista.length; i++) {
      const item = lista[i];
    const row = (
      <tr key={i}>
        <td>{item.cpf}</td>
        <td>{item.nome}</td>
        <td>{`${item.endereco}, n° ${item.numero}`}</td>
        <td>{item.bairro}</td>
        <td>{`${item.cidade}/${item.uf}`}</td>
        <td>{item.cep}</td>
      </tr>
    );

    rows.push(row);
  }
  console.log(rows)

  return <tbody>{rows}</tbody>;
}
