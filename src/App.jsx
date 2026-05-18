import { useState } from "react";

import Menu from "./components/Menu";
import JuegoHDD from "./components/JuegoHDD";
import JuegoSSD from "./components/JuegoSSD";

const App = () => {

    const [pantalla, setPantalla] =
        useState("menu");

    return (

        <div>

            {pantalla === "menu" && (

                <Menu
                    setPantalla={setPantalla}
                />

            )}

            {pantalla === "hdd" && (

                <JuegoHDD />

            )}

            {pantalla === "ssd" && (

                <JuegoSSD />

            )}

        </div>
    );
};

export default App;