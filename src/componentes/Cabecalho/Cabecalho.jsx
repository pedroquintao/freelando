import styled from "@emotion/styled"
import logoBranco from "../../assets/Logo branco.svg"

    const DivCabecalho = styled.header`
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        background-color: ${prop => prop.theme.cores.primarias.a};
        padding: 24px 120px;s
    `

    const Imagem = styled.img`

    `

    const Login = styled.p`
        color: ${prop => prop.theme.cores.secundarias.a};
        cursor: pointer;
    `

export const Cabecalho = () => {
    
    
    return (
        <DivCabecalho>
            <Imagem src={logoBranco}/>
            <Login>Login</Login>
        </DivCabecalho>
    )
}