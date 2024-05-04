import { v4 as uuidv4 } from 'uuid';


export const ArrayBotonesFijos = [
    {
        "id": uuidv4(),
        "Orden":1,
        "TituloBoton": `Autores y Título`,
        "ContenidoTextArea": `== Título del README.adoc\n'''\n[comment]\nAuthor <mail@mail.com>, {docdate}.\n`,
    },
    {
        "id": uuidv4(),
        "Orden":2,
        "TituloBoton": `Descripción principal`,
        "ContenidoTextArea": `> Una breve descripción y a quién va dirigido este proyecto.`,
    },
]