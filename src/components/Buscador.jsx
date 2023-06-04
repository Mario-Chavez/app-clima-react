import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ArrowRight } from "react-bootstrap-icons";

const Buscador = ({ ciudades }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        ciudades(data.inputCiudades);
        reset();
    };
    return (
        <Container className="container border p-2 mt-5 shadow shadow-lg">
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="row row g-0 text-center pt-2"
            >
                <div className="col-6 col-md-4 col-sm-12 mx-auto">
                    <Form.Text>
                        <h4>Buscar por Ciudad</h4>
                    </Form.Text>
                </div>
                <div className="col-sm-6 col-md-8">
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            {...register("inputCiudades", {
                                required: "El dato es obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "El nombre de la ciudad debe tener como minimo 2 caracteres",
                                },
                                maxLength: {
                                    value: 60,
                                    message:
                                        "El nombre de la ciudad debe tener como maximo 60 caracteres",
                                },
                            })}
                        ></Form.Control>
                        <Form.Text className="text-danger d-flex">
                            {errors.inputCiudades?.message}
                        </Form.Text>
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-end">
                    <Button type="submit" className="col-lg-1 ">
                        Buscar <ArrowRight />
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Buscador;
