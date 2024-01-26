import styled from "@emotion/styled"
import logoBranco from "../../assets/Logo branco.svg"


const DivRodape = styled.footer`
    /* display: flex;
    flex-direction: column;
    justify-content: start; */
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl} 120px;
    color: ${props => props.theme.cores.branco};
    /* padding: 48px 120px; */
    /* position: absolute; */
    /* bottom: 0; */
`

export const Rodape = () => {
    return(
    <DivRodape>
        {/* <h1>Rodape</h1> */}
        <img src={logoBranco} />
        <p>Desenvolvido por Alura, Projeto fictício sem fins comerciais</p>
    </DivRodape>)
}