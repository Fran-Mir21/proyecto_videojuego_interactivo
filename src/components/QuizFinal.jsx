import { useEffect, useState } from "react";

import "../css/juego.css";

import sonidoCorrecto from "../assets/sounds/dragon-studio-correct-472358.mp3";
import sonidoIncorrecto from "../assets/sounds/u_n2rdb8hxnh-incorrect-293358.mp3";
import sonidoGameOver from "../assets/sounds/dragon-studio-thud-sound-effect-405470.mp3";
import sonidoWin from "../assets/sounds/metal slug mission complete tono.mp3";

import {
    preguntasHDDFacil,
    preguntasHDDNormal,
    preguntasHDDDificil,
    preguntasSSDFacil,
    preguntasSSDNormal,
    preguntasSSDDificil
} from "../Preguntas";

import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

const playSound = (src) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play().catch(() => {});
};

const mezclarArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const QuizFinal = ({ setPantalla }) => {

    const [preguntasAleatorias, setPreguntasAleatorias] = useState(() => {
        const todasLasPreguntas = mezclarArray([

            ...preguntasHDDFacil,
            ...preguntasHDDNormal,
            ...preguntasHDDDificil,

            ...preguntasSSDFacil,
            ...preguntasSSDNormal,
            ...preguntasSSDDificil

        ]).slice(0, 10);

        return todasLasPreguntas.map((pregunta) => ({
            ...pregunta,
            opciones: mezclarArray(pregunta.opciones)
        }));
    });

    const [indice, setIndice] = useState(0);

    const [puntaje, setPuntaje] = useState(0);

    const [vidas, setVidas] = useState(3);

    const [tiempo, setTiempo] = useState(30);

    const [terminado, setTerminado] = useState(false);

    const preguntaActual =
        preguntasAleatorias[indice];

    useEffect(() => {

        if (terminado) return;

        if (tiempo === 0) {

            siguientePregunta();

            return;
        }

        const intervalo = setInterval(() => {

            setTiempo((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(intervalo);

    }, [tiempo, terminado]);

    const siguientePregunta = () => {

        const siguiente = indice + 1;

        if (
            siguiente <
            preguntasAleatorias.length
        ) {

            setIndice(siguiente);

            setTiempo(30);

        } else {

            playSound(sonidoWin);

            setTerminado(true);
        }
    };

    const verificarRespuesta = (opcion) => {

        if (
            opcion ===
            preguntaActual.correcta
        ) {

            playSound(sonidoCorrecto);

            setPuntaje((prev) => prev + 1);

        } else {

            playSound(sonidoIncorrecto);

            const nuevasVidas =
                vidas - 1;

            setVidas(nuevasVidas);

            if (nuevasVidas <= 0) {

                playSound(sonidoGameOver);

                setTerminado(true);

                return;
            }
        }

        siguientePregunta();
    };

    const reiniciarJuego = () => {

        const nuevasPreguntas = mezclarArray([

            ...preguntasHDDFacil,
            ...preguntasHDDNormal,
            ...preguntasHDDDificil,

            ...preguntasSSDFacil,
            ...preguntasSSDNormal,
            ...preguntasSSDDificil

        ]).slice(0, 10).map((pregunta) => ({
            ...pregunta,
            opciones: mezclarArray(pregunta.opciones)
        }));

        setPreguntasAleatorias(nuevasPreguntas);
        setIndice(0);
        setPuntaje(0);
        setVidas(3);
        setTiempo(30);
        setTerminado(false);
    };

    const volverMenu = () => {

        setPantalla("menu");
    };

    const calcularNota = () => {

        if (puntaje >= 9)
            return "🏆 Experto";

        if (puntaje >= 7)
            return "🥈 Avanzado";

        if (puntaje >= 5)
            return "🥉 Intermedio";

        return "💀 Principiante";
    };

    if (terminado) {

        return (

            <div className="resultado-final">

                <Resultado
                    puntaje={puntaje}
                    total={preguntasAleatorias.length}
                    reiniciarJuego={reiniciarJuego}
                    volverMenu={volverMenu}
                />

                <h2>
                    Nota final:
                    {" "}
                    {calcularNota()}
                </h2>

            </div>
        );
    }

    return (

        <div className="juego">

            <h1>
                ⚔️ Batalla Final HDD vs SSD
            </h1>

            <div className="barra-container">

                <div
                    className="barra-progreso"
                    style={{
                        width: `${
                            ((indice + 1) /
                            preguntasAleatorias.length)
                            * 100
                        }%`
                    }}
                ></div>

            </div>

            <p className="progreso">

                Pregunta
                {" "}

                {indice + 1}

                {" / "}

                {preguntasAleatorias.length}

            </p>

            <h3 className="temporizador">

                ⏳ Tiempo:
                {" "}
                {tiempo}

            </h3>

            <h3 className="vidas">

                ❤️ Vidas:
                {" "}

                {"❤️".repeat(vidas)}

            </h3>

            <Pregunta
                preguntaActual={preguntaActual}
                verificarRespuesta={verificarRespuesta}
            />

            <p className="puntaje">

                Puntaje:
                {" "}

                {puntaje}

            </p>

        </div>
    );
};

export default QuizFinal;