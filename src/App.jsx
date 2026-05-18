import { useState } from "react";

import Menu from "./components/Menu";
import JuegoHDD from "./components/JuegoHDD";
import JuegoSSD from "./components/JuegoSSD";
import Dificultad from "./components/Dificultad";

const App = () => {

    const [pantalla, setPantalla] = useState("menu");

    const [dificultad, setDificultad] = useState("");

    return (

        <div>

            {pantalla === "menu" && (

                <Menu
                    setPantalla={setPantalla}
                />

            )}

            {pantalla === "dificultadHDD" && (

                <Dificultad
                    setPantalla={setPantalla}
                    setDificultad={
                        setDificultad
                    }
                    modo="hdd"
                />

            )}

            {pantalla === "dificultadSSD" && (

                <Dificultad
                    setPantalla={setPantalla}
                    setDificultad={
                        setDificultad
                    }
                    modo="ssd"
                />

            )}

            {pantalla === "hdd" && (

                <JuegoHDD
                    dificultad={dificultad}
                />

            )}

            {pantalla === "ssd" && (

                <JuegoSSD
                    dificultad={dificultad}
                />

            )}

        </div>
    );
};

export default App;