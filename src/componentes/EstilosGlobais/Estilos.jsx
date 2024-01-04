import { Global, css } from "@emotion/react"

export const Estilos = () => {

    const estilos = css`
        * {
            font-family: 'Montserrat', sans-serif;
        }
    `

    return(
        <Global styles={estilos}/>
    )
}
