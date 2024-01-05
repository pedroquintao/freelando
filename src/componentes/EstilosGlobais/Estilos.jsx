import { Global } from "@emotion/react"

    const estilos = tema => {
        return {
            html: {
                fontFamily: tema.fontFamily
            },
            body: {
                margin: 0
            }
        }
    }

//     const estilos = css`
//     * {
//         font-family: ${props => props.theme.fontFamily}
//     }
// `

export const Estilos = () => {
    return(
        <Global styles={estilos}/>
    )
}
