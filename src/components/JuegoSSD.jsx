import { useEffect, useState } from "react";

import "../css/juego.css";
import { preguntasSSD } from "../Preguntas";
import Pregunta from "./Pregunta";
import Resultado from "./Resultado";

const TIEMPO_INICIAL = 60;

const JuegoSSD = () => {
const [indice, setIndice] = useState(0);
const [puntaje, setPuntaje] = useState(0);
const [terminado, setTerminado] = useState(false);
const [tiempo, setTiempo] = useState(TIEMPO_INICIAL);

const preguntaActual = preguntasSSD[indice];

useEffect(() => {
    if (terminado) return;

    if (tiempo === 0) {
    const siguienteIndice = indice + 1;

    if (siguienteIndice < preguntasSSD.length) {
        setIndice(siguienteIndice);
        setTiempo(TIEMPO_INICIAL);
    } else {
        setTerminado(true);
    }

    return;
    }

    const intervalo = setInterval(() => {
    setTiempo((prevTiempo) => prevTiempo - 1);
    }, 1000);

    return () => clearInterval(intervalo);
}, [indice, tiempo, terminado]);

const verificarRespuesta = (opcion) => {
    if (opcion === preguntaActual.respuesta) {
    setPuntaje((prevPuntaje) => prevPuntaje + 1);
    }

    const siguienteIndice = indice + 1;

    if (siguienteIndice < preguntasSSD.length) {
    setIndice(siguienteIndice);
    setTiempo(TIEMPO_INICIAL);
    } else {
    setTerminado(true);
    }
};

const reiniciarJuego = () => {
    setIndice(0);
    setPuntaje(0);
    setTiempo(TIEMPO_INICIAL);
    setTerminado(false);
};

if (terminado) {
    return (
    <Resultado
        puntaje={puntaje}
        total={preguntasSSD.length}
        reiniciarJuego={reiniciarJuego}
    />
    );
}

return (
    <div className="juego">
    <h1>Juego SSD</h1>
    <h3 className="temporizador">Tiempo restante: {tiempo} segundos</h3>
    <Pregunta
        preguntaActual={preguntaActual}
        verificarRespuesta={verificarRespuesta}
    />
    <p className="puntaje">Puntaje: {puntaje}</p>
    </div>
);
};

export default JuegoSSD;