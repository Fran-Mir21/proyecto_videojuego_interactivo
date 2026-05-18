import "../css/dificultad.css";

const Dificultad = ({
    setPantalla,
    setDificultad,
    modo
}) => {

    const seleccionarDificultad =
        (nivel) => {

            setDificultad(nivel);

            setPantalla(modo);
        };

    return (

        <div className="dificultad">

            <h1>
                Seleccionar dificultad
            </h1>

            <div className="botones-dificultad">

                <button
                    className="facil"

                    onClick={() =>
                        seleccionarDificultad(
                            "facil"
                        )
                    }
                >
                    Fácil
                </button>

                <button
                    className="normal"

                    onClick={() =>
                        seleccionarDificultad(
                            "normal"
                        )
                    }
                >
                    Normal
                </button>

                <button
                    className="dificil"

                    onClick={() =>
                        seleccionarDificultad(
                            "dificil"
                        )
                    }
                >
                    Difícil
                </button>

            </div>

        </div>
    );
};

export default Dificultad;