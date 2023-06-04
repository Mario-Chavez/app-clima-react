import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const TituloDeBusqueda = () => {
    return (
        <Container className="container my-5">
            <Row className="p-4 text-center">
                <Col>
                    <h3>Busca por pais y categoría de noticias que quieras ver</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default TituloDeBusqueda;
