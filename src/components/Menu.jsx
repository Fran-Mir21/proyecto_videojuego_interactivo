import "../css/menu.css";

const Menu = ({ setPantalla }) => {

    return (

        <div className="menu">

            <h1>
                Videojuego Educativo
            </h1>

            <h2>
                HDD vs SSD
            </h2>

            <p>
                Elegí un modo de juego
            </p>

            <div className="botones-menu">

                <button
                    onClick={() =>
                        setPantalla("hdd")
                    }
                >
                    Juego HDD
                </button>

                <button
                    onClick={() =>
                        setPantalla("ssd")
                    }
                >
                    Juego SSD
                </button>

                <button>
                    Quiz Final
                </button>

            </div>

        </div>
    );
};

export default Menu;