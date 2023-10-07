export default function AtualizarProduto(produto){
    console.log("oiasd")
    var lista = JSON.parse(localStorage.getItem("produtos"))
    var i=0
    while(i<lista.length && lista[i].id !== produto.id){
        console.log(lista[i])
        console.log(produto)
        i++
    }
    console.log("saiuuu")
    if(lista[i].id === produto.id){
        console.log(lista[i])
        lista[i]=produto
        localStorage.setItem("produtos",JSON.stringify(lista))
    }
}