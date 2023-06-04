import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import foto from "../assets/Image_not_available.png";

const CardNoticias = ({ clima }) => {
    console.log(clima);

    return (
        <>
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
                                <Card.Text>Humedad: {data.main.humidity}%</Card.Text>
                                <Card.Text>Presion: {data.main.pressure}</Card.Text>
                                <Card.Text>
                                    Temperatura Max: {data.main.temp_max}°C
                                </Card.Text>
                                <Card.Text>
                                    Temperatura Max: {data.main.temp_min}°C
                                </Card.Text>
                                <Card.Text>
                                    Descripción: {data.weather[0].description}
                                </Card.Text>
                                <Card.Text>
                                    Velocidad del viento: {data.wind.speed} km/h
                                </Card.Text>
                                <Card.Text>Amanecer: {data.sys.sunset}</Card.Text>
                                <Card.Text>Atardecer: {data.sys.sunrise}</Card.Text>
                                <img
                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default CardNoticias;
