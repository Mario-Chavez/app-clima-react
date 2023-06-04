import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import CardClima from "./components/CardClima.jsx";
import TituloDeBusqueda from "./components/TituloDeBusqueda";

const API_KEY = "a6058a0ce883d6e4b27adc6b93e15e01";

function App() {
    const [clima, setClima] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    useEffect(() => {}, [clima]);

    const busquedaCategoria = async (ciudad) => {
        try {
            setIsLoading(true);
            const resp = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${API_KEY} `
            );
            const dato = await resp.json();
            setLat(dato.coord.lat);
            setLong(dato.coord.lon);
            setClima([{ ...dato }]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Busca el clima donde quieras!!</h1>
                <hr />
                <Buscador ciudades={busquedaCategoria} />
                <TituloDeBusqueda />
                {isLoading ? (
                    <div className="my-5 p-4 text-center">
                        <Spinner
                            animation="border"
                            role="status"
                            variant="primary"
                        ></Spinner>
                    </div>
                ) : (
                    <section className="row justify-content-evenly mt-5">
                        <CardClima clima={clima} latitud={lat} longitud={long} />
                    </section>
                )}
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
