import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Rodape } from "./componentes/Rodape/Rodape";
import { Col, Container, Row } from "react-grid-system";

function App() {
  return (
    <ProvedorTema>
      <Cabecalho />
      <Estilos />
      <Container>
        <Row justify="center">
          <Col lg={6}>
            <Card>
              <Tipografia componente="h1" variante="h1">
                Freelando
              </Tipografia>
              <Tipografia componente="body" variante="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto titulo="Nome Completo" />
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
