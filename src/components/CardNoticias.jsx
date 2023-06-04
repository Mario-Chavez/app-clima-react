import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import foto from "../assets/Image_not_available.png";

const CardNoticias = ({ clima }) => {
    console.log(clima);

    return (
        <>
            {/* <div className="card">
                <h2>{name}</h2>
                <p>Temperatura: {main.temp}°C</p>
                <p>Sensación térmica: {main.feels_like}°C</p>
                <p>Descripción: {weather[0].description}</p>
                <p>Velocidad del viento: {wind.speed} km/h</p>
            </div> */}
            {clima == undefined ? (
                <div className="my-5 p-4 text-center">
                    <Spinner animation="border" role="status" variant="primary"></Spinner>
                </div>
            ) : (
                <div>
                    {clima.map((data, index) => (
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>Temperatura: {data.main.temp}°C</Card.Text>
                                <Card.Text>
                                    Sensación térmica: {data.main.feels_like}°C
                                </Card.Text>
                                <Card.Text>
                                    Descripción: {data.weather[0].description}
                                </Card.Text>
                                <Card.Text>
                                    Velocidad del viento: {data.wind.speed} km/h
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default CardNoticias;
