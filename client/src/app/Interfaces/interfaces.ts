export interface User {
        username?: string;
        password?: string;
        nombre?: string;
}

export interface Encuesta {
        id?: number;
        nombre?: string;
}


export interface Pregunta {
        id?: number;
        pregunta: string;
        id_encuesta?: number;
        tipo_pregunta: number; // 0 multiple  1 abierta
}

export interface Respuesta{
id?: number;
respuesta: string;
id_pregunta ?: number;
respuestaCorrecta: number; // 0 incorrecta 1 correcta 
}


export interface PreguntaActual{
        id?:  number;
        pregunta: string ;
        tipo_pregunta: number;
        id_encuesta?: number;
        // 3 cosas necesarias para crear una pregunta
        Respuestas?: Respuesta[];  // strings
}
