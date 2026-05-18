const Pregunta = ({
    preguntaActual,
    verificarRespuesta
}) => {

    return (

        <div className="pregunta">

            <h2>
                {preguntaActual.pregunta}
            </h2>

            <div className="opciones">

                {preguntaActual.opciones.map(
                    (opcion, index) => (

                        <button
                            key={index}
                            onClick={() =>
                                verificarRespuesta(
                                    opcion
                                )
                            }
                        >
                            {opcion}
                        </button>
                    )
                )}

            </div>

        </div>
    );
};

export default Pregunta;