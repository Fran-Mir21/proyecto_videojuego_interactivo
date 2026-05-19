import { useEffect, useState } from "react";

import "../css/juego.css";

import sonidoCorrecto from "../assets/sounds/dragon-studio-correct-472358.mp3";
import sonidoIncorrecto from "../assets/sounds/u_n2rdb8hxnh-incorrect-293358.mp3";
import sonidoGameOver from "../assets/sounds/dragon-studio-thud-sound-effect-405470.mp3";
import sonidoWin from "../assets/sounds/metal slug mission complete tono.mp3";

import {

    preguntasHDDFacil,

    preguntasHDDNormal,

    preguntasHDDDificil

} from "../Preguntas";

import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

const playSound = (src) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play().catch(() => {});
};

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

const JuegoHDD = ({
    dificultad,
    setPantalla
}) => {

const preguntas = {

    facil:
        preguntasHDDFacil,

    normal:
        preguntasHDDNormal,

    dificil:
        preguntasHDDDificil
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

        playSound(sonidoGameOver);

        setTerminado(true);

        return;
    }

    if (

        opcion ===
        preguntaActual.respuesta

    ) {

        playSound(sonidoCorrecto);

        setPuntaje(

            (prevPuntaje) =>

                prevPuntaje + 1
        );

    } else {

        playSound(sonidoIncorrecto);

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

        if (
            opcion ===
            preguntaActual.respuesta
        ) {
            playSound(sonidoWin);
        }

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
            Juego HDD
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

export default JuegoHDD;