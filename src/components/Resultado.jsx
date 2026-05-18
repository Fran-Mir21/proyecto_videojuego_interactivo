import "../css/resultado.css";

const Resultado = ({
    puntaje,
    total,
    reiniciarJuego,
    volverMenu
}) => {

    let nota = "";

    const porcentaje =
        (puntaje / total) * 100;

    if (porcentaje === 100) {

        nota = "EXPERTO";

    } else if (porcentaje >= 70) {

        nota = "MUY BIEN";

    } else if (porcentaje >= 50) {

        nota = "REGULAR";

    } else {

        nota = "DEBES MEJORAR";
    }

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

            <h3>
                Nivel:
                {" "}
                {nota}
            </h3>

            <button
                onClick={reiniciarJuego}
            >
                Volver a jugar
            </button>

            <button
            className="btn-menu" onClick={volverMenu}
            >
                Volver al menú
            </button>

        </div>
    );
};

export default Resultado;