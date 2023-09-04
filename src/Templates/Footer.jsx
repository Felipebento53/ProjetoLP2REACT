import { Alert } from "react-bootstrap";

export default function Footer(props){
    return(
        <Alert variant={'dark'}>
            {props.conteudo || "Rodape do Sistema"}
        </Alert>    
    );
}