import "../css/resultado.css";

const Resultado = ({
    puntaje,
    total,
    reiniciarJuego
}) => {

    return (

        <div className="resultado">

            <h1>
                Juego terminado
            </h1>

            <h2>
                Puntaje final
            </h2>

            <p>
                {puntaje}
                {" / "}
                {total}
            </p>

            <button
                onClick={reiniciarJuego}
            >
                Volver a jugar
            </button>

        </div>
    );
};

export default Resultado;