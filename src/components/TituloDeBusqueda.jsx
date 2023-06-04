import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const TituloDeBusqueda = () => {
    return (
        <Container className="container my-5">
            <Row className="p-4 text-center">
                <Col>
                    <h3>Busca la ciudad para ver su clima</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default TituloDeBusqueda;
