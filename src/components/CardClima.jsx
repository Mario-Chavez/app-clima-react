import React, { useState } from "react";
import { Card, Spinner, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import Mapa from "./Mapa";

const CardClima = ({ clima, latitud, longitud }) => {
    return (
        <>
            {clima == undefined ? (
                <div className="my-5 p-4 text-center">
                    <Spinner animation="border" role="status" variant="primary"></Spinner>
                </div>
            ) : (
                <div>
                    {clima.map((data, index) => (
                        <Card key={index} className="bg border-5 pb-5 cardClima ">
                            <Card.Body>
                                <Row className="my-5">
                                    <Col sm={12} xs={12} lg={4} className="mb-4">
                                        <div className="text-center">
                                            <Card.Title className="fs-1">
                                                {data.name}
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className="fw-bold">
                                                Temperatura: {data.main.temp}°C
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Sensación térmica: {data.main.feels_like}
                                                °C
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Humedad: {data.main.humidity}%
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Presion: {data.main.pressure} hPa
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Temperatura Max: {data.main.temp_max}°C
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Temperatura Max: {data.main.temp_min}°C
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                {data.weather[0].description}
                                            </Card.Text>
                                            <Card.Text className="fw-bold">
                                                Velocidad del viento: {data.wind.speed}{" "}
                                                km/h
                                            </Card.Text>
                                        </div>
                                    </Col>
                                    <Col sm={12} xs={12} lg={8}>
                                        <div>
                                            <Mapa lati={latitud} long={longitud} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default CardClima;
