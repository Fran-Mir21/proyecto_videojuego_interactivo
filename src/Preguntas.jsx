const preguntasHDDFacil = [

    {
        pregunta: "¿Qué significa la sigla HDD?",
        opciones: [
            "Hard Disk Drive",
            "High Density Disk",
            "Hardware Data Drive",
            "Hyper Disk Drive"
        ],
        correcta: "Hard Disk Drive"
    },

    {
        pregunta: "¿En qué se basa el almacenamiento de un HDD?",
        opciones: [
            "Microchips",
            "Magnetismo",
            "Luz láser",
            "Memoria RAM"
        ],
        correcta: "Magnetismo"
    },

    {
        pregunta: "¿Qué componente gira dentro de un HDD?",
        opciones: [
            "Cabezal",
            "Platos",
            "Memoria",
            "Cable SATA"
        ],
        correcta: "Platos"
    },

    {
        pregunta: "¿Qué componente lee y escribe datos?",
        opciones: [
            "Motor",
            "Cabezal",
            "Clúster",
            "Sector"
        ],
        correcta: "Cabezal"
    },

    {
        pregunta: "¿Qué es un plato en un HDD?",
        opciones: [
            "Disco físico interno",
            "Cable",
            "Memoria",
            "Partición"
        ],
        correcta: "Disco físico interno"
    },

    {
        pregunta: "¿Qué es una pista?",
        opciones: [
            "Circunferencia del disco",
            "Tipo de RAM",
            "Partición",
            "Cable"
        ],
        correcta: "Circunferencia del disco"
    },

    {
        pregunta: "¿Qué es un sector?",
        opciones: [
            "División de una pista",
            "Tipo de disco",
            "Memoria",
            "Cabezal"
        ],
        correcta: "División de una pista"
    },

    {
        pregunta: "¿Qué es un cilindro?",
        opciones: [
            "Conjunto de pistas alineadas",
            "Motor",
            "Cable",
            "Sistema operativo"
        ],
        correcta: "Conjunto de pistas alineadas"
    },

    {
        pregunta: "¿Qué tamaño físico suele tener un HDD de escritorio?",
        opciones: [
            "3,5 pulgadas",
            "1 pulgada",
            "10 pulgadas",
            "0,5 pulgadas"
        ],
        correcta: "3,5 pulgadas"
    },

    {
        pregunta: "¿Qué significa que un HDD sea no volátil?",
        opciones: [
            "Conserva datos sin energía",
            "Pierde datos apagado",
            "No tiene energía",
            "Es inalámbrico"
        ],
        correcta: "Conserva datos sin energía"
    },

    {
        pregunta: "¿Qué puede afectar físicamente a un HDD?",
        opciones: [
            "Golpes",
            "WiFi",
            "Bluetooth",
            "Pantalla"
        ],
        correcta: "Golpes"
    },

    {
        pregunta: "¿Qué almacena la información en un HDD?",
        opciones: [
            "Magnetismo",
            "Luz",
            "Calor",
            "Sonido"
        ],
        correcta: "Magnetismo"
    },

    {
        pregunta: "¿Qué tecnología usa un HDD?",
        opciones: [
            "Grabación magnética",
            "Memoria Flash",
            "Óptica",
            "RAM"
        ],
        correcta: "Grabación magnética"
    },

    {
        pregunta: "¿Qué sucede si un HDD pierde energía?",
        opciones: [
            "Conserva datos",
            "Se borra",
            "Explota",
            "Pierde sectores"
        ],
        correcta: "Conserva datos"
    },

    {
        pregunta: "¿Qué parte corresponde a cada cara del disco?",
        opciones: [
            "Cabezal",
            "Sector",
            "RAM",
            "Cable"
        ],
        correcta: "Cabezal"
    }
];

const preguntasHDDNormal = [

    {
        pregunta: "¿Qué es una partición?",
        opciones: [
            "División lógica del disco",
            "Cable",
            "Memoria RAM",
            "Sistema operativo"
        ],
        correcta: "División lógica del disco"
    },

    {
        pregunta: "¿Qué tecnología de partición es más antigua?",
        opciones: [
            "MBR",
            "GPT",
            "NTFS",
            "UEFI"
        ],
        correcta: "MBR"
    },

    {
        pregunta: "¿Qué sistema reemplaza a MBR?",
        opciones: [
            "GPT",
            "FAT16",
            "BIOS",
            "DOS"
        ],
        correcta: "GPT"
    },

    {
        pregunta: "¿Qué hace el formateo físico?",
        opciones: [
            "Divide pistas y sectores",
            "Instala Windows",
            "Aumenta velocidad",
            "Cambia BIOS"
        ],
        correcta: "Divide pistas y sectores"
    },

    {
        pregunta: "¿Qué hace el formateo lógico?",
        opciones: [
            "Crea sistema de archivos",
            "Cambia procesador",
            "Borra RAM",
            "Instala drivers"
        ],
        correcta: "Crea sistema de archivos"
    },

    {
        pregunta: "¿Qué es un clúster?",
        opciones: [
            "Conjunto de sectores",
            "Tipo de RAM",
            "Cabezal",
            "Cable"
        ],
        correcta: "Conjunto de sectores"
    },

    {
        pregunta: "¿Qué sistema de archivos usa Windows?",
        opciones: [
            "NTFS",
            "EXT4",
            "LINUX",
            "HPFS"
        ],
        correcta: "NTFS"
    },

    {
        pregunta: "¿Qué contiene una partición extendida?",
        opciones: [
            "Particiones lógicas",
            "Memoria RAM",
            "Procesadores",
            "Drivers"
        ],
        correcta: "Particiones lógicas"
    },

    {
        pregunta: "¿Qué realiza el POST?",
        opciones: [
            "Auto testeo inicial",
            "Formateo",
            "Partición",
            "Overclock"
        ],
        correcta: "Auto testeo inicial"
    },

    {
        pregunta: "¿Qué reemplaza al BIOS tradicional?",
        opciones: [
            "UEFI",
            "FAT32",
            "DOS",
            "EXT3"
        ],
        correcta: "UEFI"
    }
];

const preguntasHDDDificil = [

    {
        pregunta: "¿Cuál es la fórmula CHS?",
        opciones: [
            "C × H × S × 512",
            "C + H + S",
            "LBA × RPM",
            "C / H / S"
        ],
        correcta: "C × H × S × 512"
    },

    {
        pregunta: "¿Qué significa LBA?",
        opciones: [
            "Logical Block Address",
            "Low Binary Access",
            "Linear Boot Area",
            "Logical BIOS Access"
        ],
        correcta: "Logical Block Address"
    },

    {
        pregunta: "¿Cuál es el máximo de clústers FAT16?",
        opciones: [
            "65.535",
            "32.768",
            "512",
            "128"
        ],
        correcta: "65.535"
    },

    {
        pregunta: "¿Qué produce un clúster pequeño?",
        opciones: [
            "Mayor fragmentación",
            "Más velocidad",
            "Menos capacidad",
            "Menos sectores"
        ],
        correcta: "Mayor fragmentación"
    },

    {
        pregunta: "Si un archivo ocupa 1 KB y el clúster es de 4 KB, ¿cuánto ocupa?",
        opciones: [
            "4 KB",
            "1 KB",
            "2 KB",
            "8 KB"
        ],
        correcta: "4 KB"
    }
];

const preguntasSSDFacil = [

    {
        pregunta: "¿Qué significa SSD?",
        opciones: [
            "Solid State Drive",
            "Super Speed Disk",
            "Static Storage Device",
            "System Solid Disk"
        ],
        correcta: "Solid State Drive"
    },

    {
        pregunta: "¿Qué tecnología usa un SSD?",
        opciones: [
            "Memoria Flash",
            "Platos magnéticos",
            "Cintas",
            "CD"
        ],
        correcta: "Memoria Flash"
    },

    {
        pregunta: "¿Cuál es una ventaja del SSD?",
        opciones: [
            "Mayor velocidad",
            "Más ruido",
            "Más peso",
            "Más vibración"
        ],
        correcta: "Mayor velocidad"
    },

    {
        pregunta: "¿Qué partes móviles tiene un SSD?",
        opciones: [
            "Ninguna",
            "Dos",
            "Tres",
            "Una"
        ],
        correcta: "Ninguna"
    },

    {
        pregunta: "¿Cómo es el consumo energético de un SSD?",
        opciones: [
            "Menor",
            "Mayor",
            "Igual",
            "Variable"
        ],
        correcta: "Menor"
    },

    {
        pregunta: "¿Qué ruido produce un SSD?",
        opciones: [
            "Silencioso",
            "Mucho ruido",
            "Ruido fuerte",
            "Vibración"
        ],
        correcta: "Silencioso"
    },

    {
        pregunta: "¿Qué formato de SSD es compacto?",
        opciones: [
            "M.2",
            "IDE",
            "DVD",
            "Floppy"
        ],
        correcta: "M.2"
    },

    {
        pregunta: "¿Qué dispositivo es más rápido?",
        opciones: [
            "SSD",
            "HDD",
            "DVD",
            "Blu-ray"
        ],
        correcta: "SSD"
    },

    {
        pregunta: "¿Qué almacena datos en un SSD?",
        opciones: [
            "Microchips",
            "Platos",
            "Cintas",
            "Discos"
        ],
        correcta: "Microchips"
    },

    {
        pregunta: "¿Qué afecta menos a un SSD?",
        opciones: [
            "Magnetismo",
            "Golpes",
            "Caídas",
            "Vibraciones"
        ],
        correcta: "Magnetismo"
    }
];

const preguntasSSDNormal = [

    {
        pregunta: "¿Qué interfaz usan muchos SSD modernos?",
        opciones: [
            "SATA",
            "VGA",
            "PS/2",
            "IDE antiguo"
        ],
        correcta: "SATA"
    },

    {
        pregunta: "¿Qué ventaja tienen los SSD en notebooks?",
        opciones: [
            "Resisten vibraciones",
            "Pesan más",
            "Generan ruido",
            "Tienen platos"
        ],
        correcta: "Resisten vibraciones"
    },

    {
        pregunta: "¿Qué reemplaza un SSD frente a un HDD?",
        opciones: [
            "Partes mecánicas",
            "Sistema operativo",
            "Monitor",
            "Fuente"
        ],
        correcta: "Partes mecánicas"
    },

    {
        pregunta: "¿Qué hace un SSD más rápido?",
        opciones: [
            "No tener partes móviles",
            "Usar platos",
            "Usar magnetismo",
            "Tener ventiladores"
        ],
        correcta: "No tener partes móviles"
    },

    {
        pregunta: "¿Qué componente controla operaciones en un SSD?",
        opciones: [
            "Controlador",
            "Plato",
            "Cabezal",
            "Motor"
        ],
        correcta: "Controlador"
    },

    {
        pregunta: "¿Qué tipo de almacenamiento usa el SSD?",
        opciones: [
            "Estado sólido",
            "Magnético",
            "Óptico",
            "Analógico"
        ],
        correcta: "Estado sólido"
    },

    {
        pregunta: "¿Qué tipo de acceso tiene un SSD?",
        opciones: [
            "Rápido",
            "Mecánico",
            "Lento",
            "Manual"
        ],
        correcta: "Rápido"
    },

    {
        pregunta: "¿Qué mejora principalmente un SSD?",
        opciones: [
            "Tiempo de carga",
            "Calidad de imagen",
            "Resolución",
            "Audio"
        ],
        correcta: "Tiempo de carga"
    },

    {
        pregunta: "¿Qué sucede al encender una PC con SSD?",
        opciones: [
            "Inicia más rápido",
            "Se vuelve más pesada",
            "Pierde datos",
            "Hace ruido"
        ],
        correcta: "Inicia más rápido"
    },

    {
        pregunta: "¿Qué disco es más resistente a vibraciones?",
        opciones: [
            "SSD",
            "HDD",
            "DVD",
            "Blu-ray"
        ],
        correcta: "SSD"
    }
];

const preguntasSSDDificil = [

    {
        pregunta: "¿Qué almacena permanentemente los datos en un SSD?",
        opciones: [
            "Memoria Flash",
            "RAM",
            "Cache L1",
            "Procesador"
        ],
        correcta: "Memoria Flash"
    },

    {
        pregunta: "¿Qué ventaja técnica tiene un SSD sobre un HDD?",
        opciones: [
            "Menor tiempo de acceso",
            "Más ruido",
            "Más vibración",
            "Mayor tamaño"
        ],
        correcta: "Menor tiempo de acceso"
    },

    {
        pregunta: "¿Qué permite que un SSD sea silencioso?",
        opciones: [
            "No tiene motor",
            "Tiene ventilador",
            "Usa platos",
            "Tiene cabezal"
        ],
        correcta: "No tiene motor"
    },

    {
        pregunta: "¿Qué tecnología reemplaza a los platos magnéticos?",
        opciones: [
            "Memoria Flash",
            "Sectores",
            "Pistas",
            "Cilindros"
        ],
        correcta: "Memoria Flash"
    },

    {
        pregunta: "¿Qué característica mejora el rendimiento de un SSD?",
        opciones: [
            "Acceso instantáneo",
            "Partes móviles",
            "RPM",
            "Magnetismo"
        ],
        correcta: "Acceso instantáneo"
    }
];

export {

    preguntasHDDFacil,
    preguntasHDDNormal,
    preguntasHDDDificil,

    preguntasSSDFacil,
    preguntasSSDNormal,
    preguntasSSDDificil
};