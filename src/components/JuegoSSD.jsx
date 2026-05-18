import { useEffect, useState } from "react";

import "../css/juego.css";

import {

    preguntasSSDFacil,

    preguntasSSDNormal,

    preguntasSSDDificil

} from "../Preguntas";

import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

const configuracion = {

    facil: {
        tiempo: 60,
        vidas: 5
    },

    normal: {
        tiempo: 40,
        vidas: 3
    },

    dificil: {
        tiempo: 20,
        vidas: 1
    }
};

const JuegoSSD = ({
    dificultad,
    setPantalla
}) => {

const preguntas = {

    facil:
        preguntasSSDFacil,

    normal:
        preguntasSSDNormal,

    dificil:
        preguntasSSDDificil
};

const TIEMPO_INICIAL =

    configuracion[
        dificultad
    ].tiempo;

const [indice, setIndice] =
    useState(0);

const [puntaje, setPuntaje] =
    useState(0);

const [vidas, setVidas] =

    useState(

        configuracion[
            dificultad
        ].vidas
    );

const [terminado, setTerminado] =
    useState(false);

const [tiempo, setTiempo] =
    useState(TIEMPO_INICIAL);

const preguntaActual =

    preguntas[
        dificultad
    ][indice];

useEffect(() => {

    if (terminado) return;

    if (tiempo === 0) {

        const siguienteIndice =
            indice + 1;

        if (

            siguienteIndice <

            preguntas[
                dificultad
            ].length

        ) {

            setIndice(
                siguienteIndice
            );

            setTiempo(
                TIEMPO_INICIAL
            );

        } else {

            setTerminado(true);
        }

        return;
    }

    const intervalo = setInterval(
        () => {

        setTiempo(
            (prevTiempo) =>

                prevTiempo - 1
        );

    }, 1000);

    return () =>
        clearInterval(intervalo);

}, [

    indice,

    tiempo,

    terminado,

    dificultad,

    TIEMPO_INICIAL,

    preguntas
]);

const verificarRespuesta =
(opcion) => {

    if (

        vidas - 1 <= 0 &&

        opcion !==
        preguntaActual.respuesta

    ) {

        setTerminado(true);

        return;
    }

    if (

        opcion ===
        preguntaActual.respuesta

    ) {

        setPuntaje(

            (prevPuntaje) =>

                prevPuntaje + 1
        );

    } else {

        setVidas(

            (prevVidas) =>

                prevVidas - 1
        );
    }

    const siguienteIndice =
        indice + 1;

    if (

        siguienteIndice <

        preguntas[
            dificultad
        ].length

    ) {

        setIndice(siguienteIndice);

        setTiempo(
            TIEMPO_INICIAL
        );

    } else {

        setTerminado(true);
    }
};

const reiniciarJuego = () => {

    setIndice(0);

    setPuntaje(0);

    setVidas(

        configuracion[
            dificultad
        ].vidas
    );

    setTiempo(
        TIEMPO_INICIAL
    );

    setTerminado(false);
};

const volverMenu = () => {

    setPantalla("menu");
};

if (terminado) {

    return (

    <Resultado

        puntaje={puntaje}

        total={
            preguntas[
                dificultad
            ].length
        }

        reiniciarJuego={
            reiniciarJuego
        }
        volverMenu={
            volverMenu
        }
    />

    );
}

return (

    <div className="juego">

        <h1>
            Juego SSD
        </h1>

        <p className="progreso">

            Pregunta
            {" "}

            {indice + 1}

            {" / "}

            {
                preguntas[
                    dificultad
                ].length
            }

        </p>

        <h2>
            Dificultad:
            {" "}
            {dificultad}
        </h2>

        <h3 className="temporizador">

            Tiempo restante:
            {" "}

            {tiempo}

            {" "}
            segundos

        </h3>

        <h3 className="vidas">

            Vidas:
            {" "}

            {"❤️".repeat(vidas)}

        </h3>

        <Pregunta

            preguntaActual={
                preguntaActual
            }

            verificarRespuesta={
                verificarRespuesta
            }
        />

        <p className="puntaje">

            Puntaje:
            {" "}

            {puntaje}

        </p>

    </div>
);
};

export default JuegoSSD;