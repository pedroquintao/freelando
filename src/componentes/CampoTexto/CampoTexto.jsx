import styled from '@emotion/styled'

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
`
const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    background-color: ${props => props.theme.cores.branco};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    height: 40px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;

`

export const CampoTexto = ({ titulo }) => {
    return(
        <LabelEstilizada>
            { titulo }
            <InputEstilizado />
        </LabelEstilizada>
    )
}